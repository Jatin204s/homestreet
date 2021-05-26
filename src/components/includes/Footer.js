import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h5>Join HomeStreet Family</h5>
        <p>
          Bring your ideas to life with special discounts, inspiration, and lots
          of good things in store. It's all free.<a href="#"> See more</a>.
        </p>
        <button className="join">Join or Log in</button>
        <div className="socials">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <PinterestIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <YouTubeIcon />
          </a>
        </div>
        <hr className="footerhr"></hr>
      </div>

      <ul class="footer-right">
        <li>
          <h6>Help</h6>
          <ul className="box">
            <li>
              <a href="#">Customer Service</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">My Orders</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Product Recalls</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Warranties</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
        </li>
        <li>
          <h6>Shop and Learn</h6>
          <ul className="features">
            <li>
              <a href="#">Find a location</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Catalog and Brochures</a>
            </li>
            <li>
              <a href="#">Our Family</a>
            </li>
            <li>
              <a href="#">Planning tools</a>
            </li>
            <li>
              <a href="#">Buying Guides</a>
            </li>
            <li>
              <a href="#">Gift cards</a>
            </li>
            <li>
              <a href="#">Gift Registry</a>
            </li>
            <li>
              <a href="#">Credit Card and Management</a>
            </li>
            <li>
              <a href="#">Explore our new app</a>
            </li>
          </ul>
        </li>
        <li>
          <h6>About Comapany</h6>

          <ul className="features">
            <li>
              <a href="#">This is Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">Life at Home</a>
            </li>
            <li>
              <a href="#">A Sustainable Everyday</a>
            </li>
            <li>
              <a href="#">Foundation</a>
            </li>
          </ul>
        </li>
        <li>
          <h6>Legal</h6>

          <ul className="features">
            <li>
              <a href="#">Privacy and Security</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
            <li>
              <a href="#">Children's product Registration</a>
            </li>
            <li>
              <a href="#">SMÅLAND Privacy notice</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
