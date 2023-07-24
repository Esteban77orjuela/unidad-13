

import React from 'react';
import './App.css';
import Listado from './components/Listado';
import Detail from './components/Detail';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('username');
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/listado" component={Listado} />
          <PrivateRoute path="/detalle/:id" component={Detail} />
          <Route path="/login" component={Login} />
          <Redirect exact from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
