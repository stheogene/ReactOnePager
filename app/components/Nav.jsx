var React = require('react');
var {Link, IndexLink} = require('react-router');

//Stateless Functional Component when possible
var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="row">
                    <div className="top-bar-left">
                       <ul className="menu">
                           <li className="menu-text">
                               <img src={require('../images/logo.png')} className="nav-logo"/>
                           </li>
                       </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu-text">
                            <li className="sub-text">212.555.5555</li>
                            <li className="sub-text">
                               <Link to="/login">Login</Link>
                            </li>
                            <li className="toggle-topbar menu-icon">
                                <a href="#"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Nav;

