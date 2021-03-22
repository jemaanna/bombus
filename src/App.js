import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Inicio from './componentes/inicio';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <NavLink className="navbar-brand" to="/">Bombus</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
     <Switch>
        <Route exact path="/" >
          <Inicio />
       </Route>
     </Switch>
    </Router>
   
  );
}

export default App;
