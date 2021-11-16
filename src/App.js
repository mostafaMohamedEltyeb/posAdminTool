import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Component, useEffect, useState } from 'react';
import Login from './components/login';
import Welcome from './components/Welcome';




function App() {
  //phase #1
//RETERIVE ACTIONS AND PARAMETRS LIST Done
//MAKE VALIDATION TO INFORCE THE USER Done
//make login page Done

//MAKE POST ACTION IN SAVE BUTTON 
//MAKE MESSAGE IF SUCCESS AND RESET OBJECT 

//system type in parameter component 
//make select menu value map to object
//route problem

//phase #2
//make button to open dialog to search by id and retrive data in table
//make a confirmation query component 


  const [webServices, setWebServices] = useState([]);
  const [parameters, setParameters] = useState([]);
  const [actions, setActions] = useState([]);

  function getWebServices() {
    fetch(
      "http://localhost:9095/webServices"
    ).then(response => response.json())
      .then(response => setWebServices(response))
    fetch(
      "http://localhost:9095/parameters"
    ).then(response => response.json())
      .then(response => setParameters(response))
    fetch(
      "http://localhost:9095/actions"
    ).then(response => response.json())
      .then(response => setActions(response))

  }
  useEffect(() => {
    getWebServices();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/welcome" render={() => <Welcome actions={actions} parameters={parameters} webServices={webServices} />} />
          <Route component={ErrorComponent} />
        </Switch>
      </Router>
    </div>
  );

}
function ErrorComponent() {
  return <div>An Error Ocuured .Please Contact To the Technial Team</div>
}
export default App;
