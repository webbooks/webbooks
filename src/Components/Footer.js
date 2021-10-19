import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="footer-bs">
                <div class="row">
                    <div class="col-md-3 footer-brand animated fadeInLeft">
                        <h2>WebBooks</h2>
                        <p>We are the saviours of all bibliophiles.
                            We come with an online thela of books
                            new and old to serve you happiness
                            on a platter by reuniting you with
                            your favourite reads at throwaway prices!</p>
                        <p>© 2021 WebBooks.org, All rights reserved</p>
                    </div>
                    <div class="col-md-4 footer-nav animated fadeInUp">
                        <h3>Information</h3>
                        <div class="col-md-6">
                            <ul class="list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Sell Books</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 footer-social animated fadeInDown">
                        <h3>POLICIES</h3>
                        <ul>
                            <li><a href="#">Refund/Return Policy</a></li>
                            <li><a href="#">Terms and Condition</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 footer-ns animated fadeInRight">
                        <h3>Our Contacts</h3>
                        <p>Web Books</p>
                        <p>
                            C-14A, second floor, Ardee City,
                            Sector 52, Gurgaon
                            Haryana
                            IN
                        </p>
                        <h3>Newsletter</h3>
                        <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                        <p>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search for..." />
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-envelope"></span></button>
                                </span>
                            </div>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
