function HomepageSlider() {
    return (
        <div id="home-slider">
            <div class="overlay"></div>

            <div class="slider-text">
                <div id="slidecaption"></div>
            </div>

            <div class="control-nav">
                <a id="prevslide" class="load-item"><i class="font-icon-arrow-simple-left"></i></a>
                <a id="nextslide" class="load-item"><i class="font-icon-arrow-simple-right"></i></a>
                <ul id="slide-list"></ul>

                <a id="nextsection" href="#work"><i class="font-icon-arrow-simple-down"></i></a>
            </div>
        </div>
    );
}

export default HomepageSlider;