'use strict';

var React = require('react');

var Carousel = require('nuka-carousel');

const HeroSlider = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel autoplay={true} infinite={true} speed={1000}>
        <div className="hero-slider">
            <img src={require('../images/slider-1.jpg')} className="hero-slider-image large-bg"/>
            <img src={require('../images/slider-1-sm.jpg')} className="hero-slider-image small-bg"/>
            <div className="row">
                <div className="hero-slider-overlay"></div>
            </div>
            <div className="row">  
                <div className="row-absolute">  
                    <div className="hero-text">
                        <h1>Screening:<br/>DVR Secret Agent Part 2</h1>
                        <h3>October 15, 2017</h3>
                        <p className="lead">Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.</p>
                    </div>
                </div> 
            </div>
        </div>
        <div className="hero-slider">
            <img src={require('../images/slider-2.jpg')} className="hero-slider-image large-bg"/>
            <img src={require('../images/slider-2-sm.jpg')} className="hero-slider-image small-bg"/>
            <div className="row">
                <div className="hero-slider-overlay"></div>
            </div>
            <div className="row">  
                <div className="row-absolute">  
                    <div className="hero-text">
                        <h1>Screening:<br/>Milan Fashion Show</h1>
                        <h3>November 2, 2017</h3>
                        <p className="lead">Dreamcatcher tilde gastropub thundercats. Cray intelligentsia kombucha, taiyaki selfies.</p>
                    </div>
                </div> 
            </div>
        </div>
        <div className="hero-slider">
            <img src={require('../images/slider-3.jpg')} className="hero-slider-image large-bg"/>
            <img src={require('../images/slider-3-sm.jpg')} className="hero-slider-image small-bg"/>
            <div className="row">
                <div className="hero-slider-overlay"></div>
            </div>
            <div className="row">  
                <div className="row-absolute">  
                    <div className="hero-text">
                        <h1>Screening:<br/>Dior Spring Line</h1>
                        <h3>October 15, 2017</h3>
                        <p className="lead">Retro deep v fixie etsy artisan YOLO fashion axe pabst brunch. Butcher craft beer jianbing.</p>
                    </div>
                </div> 
            </div>
        </div>
      </Carousel>
    )
  }
});

module.exports = HeroSlider;