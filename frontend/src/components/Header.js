function Header() {
    return (
        <header>
            <div className="sticky-nav">
                <a id="mobile-nav" class="menu-nav" href="#menu-nav"></a>

                <div id="logo">
                    <a id="goUp" href="#home-slider" title="Brushed | Responsive One Page Template">Brushed Template</a>
                </div>

                <nav id="menu">
                    <ul id="menu-nav">
                        <li className="current"><a href="#home-slider">Home</a></li>
                        <li><a href="#work">Our Work</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="shortcodes.html" class="external">Shortcodes</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;