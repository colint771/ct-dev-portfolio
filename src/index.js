import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Projects from './Projects';
import About from './AboutMe';
import Contact from './Contact';
import * as serviceWorker from 'src/registerServiceWorker.js';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
