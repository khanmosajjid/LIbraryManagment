import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header'
// import LandingPage from './components/LandingPage/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../components/Login/Login';
// import Register from './components/Register/Register';
// import Footer from './components/Footer/Footer'
import User from '../User/User'
import Header from '../User/Header/Header'
import Profile from '../User/Profile/Profile'
import LandingPage from '../components/LandingPage/LandingPage';
import Footer from '../components/Footer/Footer'

function App() {
  return (
    <div className="App">
        <Header></Header>
          
      <Router>
      
      <Switch>
      <Route exact path="/user">
      <User></User>
        </Route>
        
        <Route exact path="/user/profile">
         <Profile></Profile>
        </Route>
       
        <Route path="/">
       <LandingPage/>
          
        </Route>
        

      </Switch>
    
  </Router>
<Footer></Footer>
      
      
    
      
    </div>
  );
}

export default App;





    
    
      
     
     
    
   

