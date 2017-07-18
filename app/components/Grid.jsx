//Load React
var React = require('react');

var Grid = (props) => {
    return (
        <div className="custom-grid">
            <div className="row">
                <div className="grid-block" id="block-1">
                    <img src={require('../images/block-1.jpg')} alt="Block 1" className="grid-thumb"/>
                    <small className="grid-date">February 10 2017</small>
                    <h2>Bureaux exquisite delightful carefully curated soft power.</h2>
                    <small className="grid-sponsor">Presented by<span>Lorem Ipsum</span></small>
                </div>
                <div className="grid-block" id="block-2">
                    <img src={require('../images/block-2.jpg')} alt="Block 2" className="grid-thumb"/>
                    <small className="grid-date">February 10 2017</small>
                    <h2>Bureaux exquisite delightful carefully curated soft power.</h2>
                    <small className="grid-sponsor">Presented by<span>Lorem Ipsum</span></small>
                </div>
                <div className="grid-block" id="block-3">
                    <img src={require('../images/block-3.jpg')} alt="Block 3" className="grid-thumb"/>
                    <small className="grid-date">February 10 2017</small>
                    <h2>Bureaux exquisite delightful carefully curated soft power.</h2>
                    <small className="grid-sponsor">Presented by<span>Lorem Ipsum</span></small>
                </div>
                <div className="grid-block" id="block-4">
                    <img src={require('../images/block-4.jpg')} alt="Block 4" className="grid-thumb"/>
                    <small className="grid-date">February 10 2017</small>
                    <h2>Bureaux exquisite delightful carefully curated soft power.</h2>
                    <small className="grid-sponsor">Presented by<span>Lorem Ipsum</span></small>
                </div>
                <div className="grid-block" id="block-5">
                    <img src={require('../images/block-5.jpg')} alt="Block 5" className="grid-thumb"/>
                    <small className="grid-date">February 10 2017</small>
                    <h2>Bureaux exquisite delightful carefully curated soft power.</h2>
                    <small className="grid-sponsor">Presented by<span>Lorem Ipsum</span></small>
                </div>
                <div className="grid-block" id="block-6">
                    <img src={require('../images/block-6.jpg')} alt="Block 6" className="grid-thumb"/>
                    <small className="grid-date">February 10 2017</small>
                    <h2>Bureaux exquisite delightful carefully curated soft power.</h2>
                    <small className="grid-sponsor">Presented by<span>Lorem Ipsum</span></small>
                </div>
            </div>
        </div>
    )
};

module.exports = Grid;