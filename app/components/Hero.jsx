//Load React
var React = require('react');

//var About = React.createClass({
//    render: function () {
//        return (
//          <h3>About Component</h3>
//        )
//    }
//});


var Hero = (props) => {
    
    return (
        
        <div className="hero-wrapper">
            <div className="orbit" role="region" aria-label="High Fashion" data-orbit>
                <div className="orbit-wrapper">
                    <ul className="orbit-container custom-slides">
                        <li className="is-active orbit-slide">
                            <figure className="orbit-figure">
                                <img src={require('../images/alt-bg.jpg')} className="orbit-image"/>
                                <div className="row">
                                    <figcaption className="orbit-caption">Screening: DVF Secret Agent Part 2</figcaption>
                                </div>
                            </figure>
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