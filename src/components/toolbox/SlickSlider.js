import React, { Component, useId } from "react";
import Slider from "react-slick";

export  class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: this.props.slides?this.props.slides.length>6:false,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 0.8,
            slidesToScroll: 2,
          
          }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 0.5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 0.45,
              slidesToScroll: 1,
              initialSlide: 1

            }
          },
            
      ]
    };
    return (
      <div className="h-100">
        <Slider {...settings}>
          {
            this.props.slides&&this.props.slides.map((item,index)=>{
                return(
                   <div key={index}>{item}</div>
                )
            })
          }
        </Slider>
      </div>
    );
  }
}

export  class VerticalSlider extends Component {

state={
    slides:[]
}

componentDidMount(){
    this.props.slides&&this.setState({slides:[...this.props.slides]})
}

componentDidUpdate(prevProps,prevState){
    if(prevProps.slides!==this.props.slides){
        this.setState({slides:[...this.props.slides]})
    }
}

    render() {
      const settings = {
        
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,   
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        
        };
      return (
        <div className="h-100">
          
          <Slider {...settings}>
            {this.state.slides.map((item,index)=>{
                return(
                    <div className="w-100" key={index}> 
                {item}
            </div>
                )
            })}
          </Slider>
        </div>
      );
    }
  }