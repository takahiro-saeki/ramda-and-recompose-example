import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './containers/App';
import Header from './components/Header';
import SelectedText from './components/SelectedText';
import HoistTest from './containers/HoistTest'
console.log('count', HoistTest.count(10))
console.log('add', HoistTest.add(2, 4))
console.log('internal', HoistTest.internal())

const logging = (...args) => {
  const reducing = args[0].reduce((arg, currentValue, currentIndex) => {
    const merge = `${arg}${args[currentIndex]}${currentValue}`
    return merge
  })
  console.log(reducing)
  return reducing
}

const param = {
  a: 'sample',
  b: 'mock data'
}

logging`this is ${param.a}. also this data is ${param.b}.`
// this is sample. also this data is mock data.

render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={SelectedText} />
        <Route path="/header" component={Header} />
        <Route path="/app" component={App} />
      </Switch>
    </div>
  </Router>, 
  document.getElementById('app')
)