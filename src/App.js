import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import AppBar from './MUIAppBar'; 
//import Show from './SLIDEShow';
//import { AppBar } from 'material-ui';
//import Butt from './Button';
import styled from "styled-components";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Information from './components/Information';
import Console from './components/Console';
import Cofounder from './components/Cofounder';
import Analytics from './components/Analytics';
//import { colors } from 'material-ui/styles';
//import { white } from 'material-ui/styles/colors';
//import {
  //NavItem,
  //NavLink,
//} from 'reactstrap';



const AppContainer = styled.div`
text-align: center;
`




class App extends Component {

  render() {
    return (
      
      <AppContainer>
      
      <Navbar />
      <Header/>
      <Information /> 
        <Console />
       <Cofounder />
       <Analytics />
          {/* <Footer /> */}




    
   
    </AppContainer>
    );
  }
}

export default App;
