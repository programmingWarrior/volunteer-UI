import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NoMatch from './component/NoMatch/NoMatch';
import Register from './component/Register/Register';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Admin from './component/Admin/Admin';
import VolunteerActivities from './component/VolunteerActivities/VolunteerActivities';
import VolunteerRegisterList from './component/Admin/VolunteerRegisterList/VolunteerRegisterList';
import AddEvent from './component/Admin/AddEvent/AddEvent';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <PrivateRoute path="/product/:_id">
              <Register />
          </PrivateRoute>
          <PrivateRoute path="/register">
              <Register />
          </PrivateRoute>
          <PrivateRoute path="/volunteerActivities">
              <VolunteerActivities />
          </PrivateRoute>
          <PrivateRoute path="/volunteerRegisterList">
              <VolunteerRegisterList />
          </PrivateRoute>
          <PrivateRoute path="/addEvent">
              <AddEvent />
          </PrivateRoute>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="*">
              <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;