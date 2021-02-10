import React, { Component } from "react";

export class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            <div className="col-sm-6 col-md-4 col-lg-4 mr-3">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        {" "}
                                        <a
                                            href="#portfolio"
                                            title="Project Title"
                                            data-lightbox-gallery="gallery1"
                                        >
                                            <div className="hover-text">
                                                <h4>Career Development System</h4>
                                            </div>
                                            <img
                                                src="img/portfolio/FlyingScroll.PNG"
                                                className="img-responsive"
                                                alt="Project Title"
                                            />{" "}
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        {" "}
                                        <a
                                            href="#portfolio"
                                            title="Project Title"
                                            data-lightbox-gallery="gallery1"
                                        >
                                            <div className="hover-text">
                                                <h4>Forex website</h4>
                                            </div>
                                            <img
                                                src="img/portfolio/BullsAndBearsFX.PNG"
                                                className="img-responsive"
                                                alt="Project Title"
                                            />{" "}
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
