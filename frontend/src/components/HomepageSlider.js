function HomepageSlider() {
    return (
        <div id="home-slider">
            <div className="overlay"></div>

            <div className="slider-text">
                <div id="slidecaption"></div>
            </div>

            <div className="control-nav">
                <a id="prevslide" className="load-item"><i className="font-icon-arrow-simple-left"></i></a>
                <a id="nextslide" className="load-item"><i className="font-icon-arrow-simple-right"></i></a>
                <ul id="slide-list"></ul>

                <a id="nextsection" href="#work"><i className="font-icon-arrow-simple-down"></i></a>
            </div>
        </div>
    );
}

export default HomepageSlider;