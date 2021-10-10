import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';

const Cigars = () => (
  <div>
    <h1>
      Cigars Page
    </h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/cigar' component={Cigars} />
      </Switch>
    
    </div>
  );
}

export default App;