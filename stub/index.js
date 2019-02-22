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


app.get("/api/setUsername", (req, res) => {
  req.session.message = 'Hello World';

  return res.send({ username: 123456, userDefaultTown: 898 })
});

app.get("/api/getUsername", (req, res) => {
  console.log('req.session.message', req.session.message);
  const a = req.session.message;
  return res.send({ username: a, userDefaultTown: 898 })

}

);

app.get("/getCurrentState", (req, res) => 
  res.send({ sucsessful: true, body: {
    result: 'SUCCESS',
    state: '',
    flow: 'radioFlow'
  } })


);
const WF = loadJson('./workflow');

app.post("/radio-bh", (req, res) => {
 
  const {cmd, name} = req.query;
  let _result, _state, _flow;
  if (cmd == 'START') {
    _state = WF.flow[name].init;
    _flow = name;
  }

  if (cmd == 'EVENT') {
    _currentState = req.session.workflow.state;
    _currentFlow = req.session.workflow.flow;
    _state = WF.flow[_currentFlow].state[_currentState].events[name].newstate ;
    _flow = req.session.workflow.flow;
   
  }
  req.session.workflow = {
    state: _state,
    flow: _flow
  };
  res.send({ 
      result: 'SUCCESS',
      state: _state,
      flow: _flow
   });
  
}
 

);

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;