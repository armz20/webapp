import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Home from './pages/home';
import Profile from './pages/profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PostQuestion from './pages/postquestion';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/postquestion" exact component={PostQuestion} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        
        </Switch>
    </Router>
  );
}

export default App;