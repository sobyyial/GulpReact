import React from 'react';
import { Button } from 'reactstrap';
import guage from '../../guage.svg';
import browser from '../../browser.svg';
import atom from '../../atom.svg';


export default class Example extends React.Component {
  render() {
    return (


  <div>     
<div class="container-sml"style={{backgroundColor:'#CF4647'}}>
<div class="col-12 text-center"style={{color:'white', width:'95%', padding:'60px', height:'50px' }}>
<h2 class="paragraph1">
<p>gulp is a toolkit for automating painful or time-consuming tasks in your development<br>
           </br> 
            <br></br>
         workflow, so you can stop messing around and build something.</p>
</h2>
</div>
<Button style={{color:'#CF4647',backgroundColor:'white', margin:'5%'}}>Get Started</Button>{' '}
</div>
  




<div class="container-lrg flex baseline" className="d-flex"style={{margin:'10%'}} >
 <div class="col-4"> 
  <img src={browser} className="App-logo" alt="browser"/>
<h3 class="subheading center" style={{padding:'20px'}}>Simple Usage</h3>
<p class="paragraph">
By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before.
</p>
</div>

<div class="col-">
<img src={guage} className="App-logo" alt="guage" />
<h3 class="subheading center"style={{padding:'20px'}}>Efficient Builds</h3>
<p class="paragraph">
Using the power of node streams, gulp gives you fast builds that don't write intermediary files to disk.
</p>
</div>

<div class="col-4">

<img src={atom} className="App-logo" alt="atom" />
<h3 class="subheading center"style={{padding:'20px'}}>Quality Ecosystem</h3>
<p class="paragraph">
By enforcing strict guidelines, we ensure our plugins stay simple and work as expected.
</p>
</div>
</div>



<div class="border-container" >
<div class="col-3 border" style={{backgroundColor:'#CF4747',height:'2.8px'}}></div>
</div>

<div class="container-lrg flex baseline"style={{padding:'8%'}} >
<div class="col-3 text-center">
<h3 id="installs" class="subheading">100,000</h3>
<p class="paragraph">
Installs Today
</p>
</div>
<div class="col-3 text-center">
<h3 id="gulp-plugins" class="subheading">1,000</h3>
<p class="paragraph">
Gulp Plugins
</p>
</div>
<div class="col-3 text-center">
<h3 class="subheading">1,000+</h3>
<p class="paragraph">
Companies
</p>
</div>
<div class="col-3 text-center">
<h3 class="subheading">
∞
</h3>
<p class="paragraph">
Seconds Saved
</p>
</div>
</div>
</div>
    );
  }
}

  
 
