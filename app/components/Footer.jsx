//Load React
var React = require('react');

var Footer = (props) => {
    
    return (
        
        <div className="footer">
            <div className="row">
                <ul className="footer-nav">
                    <li className="sub-text">&copy; 2017 &mdash; Sparta Plaesent</li>&ndash;
                    <li className="sub-text footer-social">Instagram</li>
                    <li className="sub-text footer-social">Facebook</li>
                    <li className="sub-text footer-social">Twitter</li>
                </ul>
            </div>
        </div>
        
    )
};

module.exports = Footer;