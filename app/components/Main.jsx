// Require the React library
var React = require('react');

// Load children components
var Nav = require('Nav');
var HeroSlider = require('HeroSlider');
var Grid = require('Grid');
var Footer = require('Footer');

// Set variables for components 
//var Main = React.createClass({
//    render: function () {
//        return (
//            <div>
//                <Nav></Nav>
//                <h2>Main Component</h2>
//                {this.props.children}
//            </div>
//        );
//    }
//});

//Stateless Functional Component when possible
var Main = (props) => {
    return (
        <div>
            <Nav></Nav>
            <HeroSlider></HeroSlider>
            <Grid></Grid>
            <div>       
                {props.children}
            </div>
            <Footer></Footer>
        </div>
    );
};

// Make the components available for exporting
module.exports = Main;
