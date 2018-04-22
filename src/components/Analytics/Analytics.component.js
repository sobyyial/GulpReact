import React from 'react';
import { Button } from 'reactstrap';
import { Image } from "../Image";
import Img1 from '../../img/img1.png';
import Img2 from '../../img/img2.png';
import Img3 from '../../img/img3.jpg';
//import Img4 from '../../img/img4.png';
import Img5 from '../../img/img5.png';
// import Img6 from '../../img/img6.png';
// import Img7 from '../../img/img7.jpg';
//import Img8 from '../../img/img8.png';
//import Img9 from '../../img/img9.png';
// import Img10 from '../../img/img10.jpg';

const Data=[{
src: Img1,
alt: 'Image1',
size: 80
},{
src: Img2,
alt: 'Image2',
size: 80
},{
src: Img3,
alt: 'Image3',
size: 80
},{
src: Img5,
alt: 'Image4',
size: 80
},{
src: Img5,
alt: 'Image5',
size: 80
},{
  src: Img1,
  alt: 'Image1',
  size: 80
  },{
  src: Img2,
  alt: 'Image2',
  size: 80
  },{
  src: Img3,
  alt: 'Image3',
  size: 80
  },{
  src: Img5,
  alt: 'Image4',
  size: 80
  },{
  src: Img5,
  alt: 'Image5',
  size: 80
  }];


export default class Example extends React.Component {
    render() {
      return (



<div class="footer"style={{backgroundColor:'#cf4647',color:'white' }} >
<div class="container-lrg flex" className="d-flex" >
<div class="col-6 text-center" style={{marginTop:'5%',marginBottom:'10%'}}>
<div class="contribute-copy center vertical text-center">
<h3 class="subheading" >Become a backer</h3>
<p class="paragraph">
Support the community and keep development going strong.
</p>
<Button style={{color:'#CF4647',backgroundColor:'white', margin:'3%'}}>DONATE</Button>{' '}
</div>
</div>
<div class="col-6 text-center"style={{marginTop:'5%'}} >
<h3 class="subheading">Backers &amp; Sponsors</h3>
<div class="d-flex justify-content-center my-5 flex-wrap">
{
  Data.map(imageItem=><Image src={imageItem.src} alt={imageItem.alt} size={imageItem.size} style={{margin: 15}}/>)
  }
</div>
</div>
</div>
</div>


      );
    }
}