import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer'
import User from './User/User';
import UserApp from './User/App';
import Profile from './User/Profile/Profile'
import Admin from './Admin/Admin'

function App() {
  return (
    <div className="App">
          
      <Router>
      
      <Switch>
      <Route exact path="/">
      <LandingPage></LandingPage>
        </Route>
        
        <Route exact path="/register">
         <Register></Register>
        </Route>
       
        <Route path="/login">
       <Login></Login>
          
        </Route>
        <Route path="/user">
          <UserApp></UserApp>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>

      </Switch>
    
  </Router>
{/* <Footer></Footer> */}
      
      
    
      
    </div>
  );
}

export default App;





    
    
      
     
     
    
   

