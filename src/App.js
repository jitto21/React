import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Component } from 'react';
import HotDeals from './components/HotDeals';
import Register from './components/Register';
import Login from './components/Login';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md mb-3">
          <a class="navbar-brand" href="#">Project</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/hotdeals" className="nav-link">Hot Deals</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="p-2">
          <Switch>
            <Route path="/hotdeals">
              <HotDeals />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
