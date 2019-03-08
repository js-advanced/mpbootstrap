const express = require("express");
const app = express();
const fs = require('fs')
const path = require('path')

const _ = require('lodash')

const session = require("express-session");
const cookieParser = require('cookie-parser');
app.use(express.static("dist"));
// middleware
app.use(cookieParser());
app.use(session({
  secret: 'LONG_RANDOM_STRING_HERE',
  resave: true,
  saveUninitialized: false
}));
const loadJson = (filepath, encoding = 'utf8') => JSON.parse(fs.readFileSync(path.resolve(__dirname, `${filepath}.json`), { encoding }))

const elevators = require('./elevator-bh-route');

app.use(elevators);

app.get('/getClient', (req, res) => {
  res.send(
      { "fname": "Andrey", "lname": "Vlasov", "messages": "5", "purchases": "3", "userphotourl": "/photo_123.png" }
  );
});

app.get("/getCurrentState", (req, res) =>
  res.send({
    sucsessful: true, body: {
      result: 'SUCCESS',
      state: '',
      flow: 'radioFlow'
    }
  })


);
const WF = loadJson('./workflow');

app.post("/radio-bh", (req, res) => {

  const { cmd, name } = req.query;
  let _result, _state, _flow, _title;
  let historyList = (req.session && req.session.workflow && req.session.workflow.history) || [];
  if (cmd == 'START') {
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
  }

  if (cmd == 'EVENT') {
    _currentState = req.session.workflow.state;
    _currentFlow = req.session.workflow.flow;
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
  }

  if (cmd == 'ABORT') {
    let _hist;
    let _historyList = [];
    for (let i = 0; i < historyList.length; i++ ) {
      _historyList.push(historyList[i]);
      if(historyList[i].id == name) {
        _hist = historyList[i];
          break;
      }  
    }
  
    _state = _hist.state
    _flow = _hist.flow
    historyList = _historyList;
   }

   if (cmd == 'EXIT') {
    _state = '';
    _flow = '';
    historyList = [];
   }

  req.session.workflow = {
    state: _state,
    flow: _flow,
    history: historyList
  };
  res.send({
    result: 'SUCCESS',
    state: _state,
    flow: _flow,
    history: historyList
  });

}


);
require('./transport-route')(app);
app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;