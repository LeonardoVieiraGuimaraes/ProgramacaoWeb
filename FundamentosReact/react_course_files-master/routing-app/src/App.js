import React from 'react';
import './App.css';
import MyNav from './components/MyNav'
import Home from './pages/Home'
import News from './pages/News'
import SpecificNew from './pages/SpecificNew'
import Contact from './pages/Contact'
import About from './pages/About'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <header><MyNav /></header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/news" exact component={News} />
            <Route path="/news/:id" component={SpecificNew} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
