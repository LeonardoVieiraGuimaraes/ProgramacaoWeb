import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import MyMenuBar from './components/MyMenuBar'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AmiiboCaracters from './pages/AmiiboCaracters'
import AmiiboCharacter from './pages/AmiiboCharacter'
import Success from './pages/Success'
import Error from './pages/Error'

const useStyles = makeStyles(theme => ({
  root: {fleGrow: 1}
}))

function App() {

  const classes = useStyles()

  return (
    <Router>
      <div className={classes.root}>
        <MyMenuBar />
        <Switch>
          <Route path="/" exact component={AmiiboCaracters} />
          <Route path="/caracters/:id" exact component={AmiiboCharacter} />
          <Route path="/success" component={Success} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
