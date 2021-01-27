import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/rooms'><Rooms /></Route>
        <Route path='/rooms/:slug'><SingleRoom /></Route>
        <Route path='/*'><Error /></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
