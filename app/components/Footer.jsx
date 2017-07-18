//Load React
var React = require('react');

var Footer = (props) => {
    
    return (
        
        <div className="footer">
            <div className="row">
                <ul className="footer-nav">
                    <li className="sub-text footer-copy">&copy; 2017 &mdash; Sparta Plaesent</li>
                    <li className="sub-text footer-social"><a>Instagram</a></li>
                    <li className="sub-text footer-social"><a>Facebook</a></li>
                    <li className="sub-text footer-social"><a>Twitter</a></li>
                </ul>
            </div>
        </div>
        
    )
};

module.exports = Footer;