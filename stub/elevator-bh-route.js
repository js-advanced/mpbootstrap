const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const loadJson = (filepath, encoding = 'utf8') =>
  JSON.parse(fs.readFileSync(path.resolve(__dirname, `${filepath}.json`), { encoding }));

const WF = loadJson('./workflow');

router.post("/elevators-bh", (req, res) => {
  // Extract command and name of flow and history if it exists
  const {cmd, name} = req.query;
  let historyList = (req.session && req.session.workflow && req.session.workflow.history) || [];

  // Prepare temporary variables
  let _state, _flow, _title, _history;

  // Process request for a given command
  switch (cmd) {
    // Start workflow
    case 'START':
      _state = WF.flow[name].init;
      _title = WF.flow[name].title;
      _flow = name;
      _history = {
        id: "1",
        state: _state,
        flow: _flow,
        title: _title,
        status: "ACTIVE"
      };
      historyList.push(_history);
      break;
    // Process event with given name
    case 'EVENT':
      let _currentState = req.session.workflow.state;
      let _currentFlow = req.session.workflow.flow;
      _state = WF.flow[_currentFlow].state[_currentState].events[name].newstate;
      _title = WF.flow[_currentFlow].state[_currentState].events[name].title;
      _flow = req.session.workflow.flow;

      _history = {
        id: (historyList.length + 1).toString(),
        state: _state,
        flow: _flow,
        title: _title,
        status: "ACTIVE"
      };
      historyList.push(_history);
      break;
    // Rollback to the state with given id
    case 'ABORT':
      let _hist;
      let _historyList = [];
      for (let i = 0; i < historyList.length; i++) {
        _historyList.push(historyList[i]);
        if (historyList[i].id === name) {
          _hist = historyList[i];
          break;
        }
      }

      _state = _hist.state;
      _flow = _hist.flow;
      historyList = _historyList;
      break;
    // Exit from current workflow
    case 'EXIT':
      _state = '';
      _flow = '';
      historyList = [];
      break;
  }

  // Update workflow in session object
  req.session.workflow = {
    state: _state,
    flow: _flow,
    history: historyList
  };

  // Send response with updated state to a frontend
  res.send({
    result: 'SUCCESS',
    state: _state,
    flow: _flow,
    history: historyList
  });
});

module.exports = router;
