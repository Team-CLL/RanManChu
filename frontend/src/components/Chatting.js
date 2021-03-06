function Chatting() {
    return (
        <div>
            <div id="contact" class="page">
                <div class="container">
                    <div class="row">
                        <div class="span12">
                            <div class="title-page">
                                <h2 class="title">Get in Touch</h2>
                                <h3 class="title-description">We’re currently accepting new client projects. We look forward to serving you.</h3>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="span9">

                            <form id="contact-form" class="contact-form" action="#">
                                <p class="contact-name">
                                    <input id="contact_name" type="text" placeholder="Full Name" value="" name="name" />
                                </p>
                                <p class="contact-email">
                                    <input id="contact_email" type="text" placeholder="Email Address" value="" name="email" />
                                </p>
                                <p class="contact-message">
                                    <textarea id="contact_message" placeholder="Your Message" name="message" rows="15" cols="40"></textarea>
                                </p>
                                <p class="contact-submit">
                                    <a id="contact-submit" class="submit" href="#">Send Your Email</a>
                                </p>

                                <div id="response">

                                </div>
                            </form>

                        </div>

                        <div class="span3">
                            <div class="contact-details">
                                <h3>Contact Details</h3>
                                <ul>
                                    <li><a href="#">hello@brushed.com</a></li>
                                    <li>(916) 375-2525</li>
                                    <li>
                                        Brushed Studio
                                        <br />
                                        5240 Vanish Island. 105
                                        <br />
                                        Unknow
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatting;