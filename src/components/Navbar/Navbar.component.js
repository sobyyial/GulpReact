import React from 'react';
import {
  //Collapse,
  Navbar,
  //NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
 } from 'reactstrap';
  import logo1 from '../../logo1.svg';

  export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
        <Navbar color="text-warning" text-danger="md"style={{backgroundColor: '#CF4647'}}> 
        <NavbarBrand href="/"><img src={logo1} className="App-logo" alt="logo1"style={{width:'35%',height:'40px',paddingLeft:'50px' }}/></NavbarBrand>
        
          <Nav className="ml-auto"style={{color:'white',width:'35%',height:'50px',paddingright:'20px',padding:'0px' }}>
            <NavItem>
              <NavLink href="/Docs/">Docs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https:www.google.com">Pulgins</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Twitter/">Twitter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contribute/">Contribute</NavLink>
            </NavItem>
          </Nav>
         
<div style={{ paddingLeft:'175px',color:'white',height:'30px', margin:'120px' }}>

<h1 class="heading text-center">Automate and enhance your workflow</h1>
   </div>

      </Navbar>
      
</div>
    
);
}
}