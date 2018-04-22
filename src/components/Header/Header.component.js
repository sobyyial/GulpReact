import React,{Component} from 'react';
//import Nature from './img/image1.jpg';
//import React from 'react';
//import AppBar from './MUIAppBar';
//import { Button } from 'reactstrap';
import Nature from '../../img/image1.jpg';
import Code from '../../img/code1.JPG';
import Code1 from '../../img/code2.jpg';
 import {
   Carousel,
   CarouselItem,
   CarouselControl,
   CarouselIndicators,
  CarouselCaption
 } from 'reactstrap';





const items = [


  {
    src: Nature,
    altText: 'slide 1',
    caption: ''
  },
  {
    src: Code1,
    altText: 'slide 2',
    caption: ''
  },
  {
    src: Code,
    altText: 'Slide 3',
    caption: ''
  },
];
  

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    
const { activeIndex } = this.state;

    const slides = items.map((carItem) => {
      return (
        
        <CarouselItem 
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={carItem.src}
        >
          <img src={carItem.src} alt={carItem.altText} className="w-100"/>
          <CarouselCaption captionText={carItem.caption} captionHeader={carItem.caption} />
        </CarouselItem>
      );
    });

    return (

      <Carousel 
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );  
  }
  }
  export default Example;




      