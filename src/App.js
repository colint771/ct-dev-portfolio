import React, { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';

function App() {
  const [activeLink, setActiveLink] = useState('aboutMe');

  return (
    <div className="App">
      <header>
        <h1>Colin Taliaferro's Portfolio</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/aboutMe" activeClassName="active" onClick={() => setActiveLink('aboutMe')}>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active" onClick={() => setActiveLink('portfolio')}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" onClick={() => setActiveLink('contact')}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" activeClassName="active" onClick={() => setActiveLink('resume')}>
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

