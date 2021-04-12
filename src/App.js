import React from 'react';
import './App.css';
import MapView from './componentes/MapView';
import PaginaPrincipal from './componentes/PaginaPrincipal'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App(){
  return(
      <Router>
          <Switch>
              <Route path="/map">
                  <MapView />
              </Route>
              <Route path="/">
                  <PaginaPrincipal />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
