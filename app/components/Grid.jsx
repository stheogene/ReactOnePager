//Load React
var React = require('react');

var Grid = (props) => {
    return (
        <div className="custom-grid">
            <div className="row">
                <div className="grid-block" id="block-1">
                    <img src={require('../images/block-1.jpg')} alt="Block 1" className="grid-thumb"/>
                    <small className="grid-date">February 10 2017</small>
                    <h2><a>Bureaux exquisite delightful carefully curated soft power.</a></h2>
                    <p>Presented by <strong>Lorem Ipsum</strong></p>
                </div>
                <div className="grid-block" id="block-2">
                    <div className="grid-thumb">
                        <img src={require('../images/block-2.jpg')} alt="Block 2"/>
                    </div>
                    <small className="grid-date">February 2 2017</small>
                    <h2><a>Sharp bureaux sleepy K-pop carefully curated.</a></h2>
                    <p>Presented by <strong>Lorem Ipsum</strong></p>
                </div>
                <div className="grid-block" id="block-3">
                    <div className="grid-thumb">
                        <img src={require('../images/block-3.jpg')} alt="Block 3"/>
                    </div>
                    <small className="grid-date">January 27 2017</small>
                    <h2><a>St Moritz uniforms Beams.</a></h2>
                    <p>Presented by <strong>Lorem Ipsum</strong></p>
                </div>
                <div className="grid-block" id="block-4">
                    <div className="grid-thumb">
                        <img src={require('../images/block-4.jpg')} alt="Block 4"/>
                    </div>
                    <small className="grid-date">January 21 2017</small>
                    <h2><a>Bureaux exquisite delightful carefully curated soft power.</a></h2>
                    <p>Presented by <strong>Lorem Ipsum</strong></p>
                </div>
                <div className="grid-block" id="block-5">
                    <div className="grid-thumb">
                        <img src={require('../images/block-5.jpg')} alt="Block 5"/>
                    </div>
                    <small className="grid-date">January 18 2017</small>
                    <h2><a>K-pop extraordinary.</a></h2>
                    <p>Presented by <strong>Lorem Ipsum</strong></p>
                </div>
                <div className="grid-block" id="block-6">
                    <div className="grid-thumb">
                        <img src={require('../images/block-6.jpg')} alt="Block 6"/>
                    </div>
                    <small className="grid-date">February 10 2017</small>
                    <h2><a>Artisanal iconic cutting-edge business class.</a></h2>
                    <p>Presented by <strong>Lorem Ipsum</strong></p>
                </div>
            </div>
        </div>
    )
};

module.exports = Grid;