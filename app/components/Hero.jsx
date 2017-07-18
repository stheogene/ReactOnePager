//Load React
var React = require('react');

var Hero = (props) => {
    
    return (
        
        <div className="hero-wrapper">
            <div className="orbit" role="region" aria-label="High Fashion" data-orbit>
                <div className="orbit-wrapper">
                    <ul className="orbit-container custom-slides">
                        <li className="is-active orbit-slide">
                            <div className="orbit-figure">
                                <img src={require('../images/alt-bg.jpg')} className="orbit-image"/>
                                <div className="row">
                                    <div className="slider-overlay"></div>
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
                        </li>
                    </ul>
                </div>
            </div>
            
            <nav className="orbit-bullets">
                <button className="is-active" data-slide="0"><span className="show-for-sr">First slide details.</span><span className="show-for-sr">Current Slide</span></button>
                <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
                <button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
            </nav>
            
        </div>
        
        
    )
};

module.exports = Hero;