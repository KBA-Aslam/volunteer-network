import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Inventory from './Components/Inventory/Inventory';
import Registry from './Components/Registry/Registry';
import Review from './Components/Review/Review';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';
import Event from './Components/Event/Event';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/head">
          <Header></Header>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/inventory">
          <Inventory></Inventory>
          </Route>
          <PrivateRoute path="/registry">
          <Registry></Registry>
          </PrivateRoute>
          <Route path="/review">
          <Review></Review>
          </Route>
          <PrivateRoute path="/admin">
          <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/event">
          <Event></Event>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
