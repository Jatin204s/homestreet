import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white m-auto">
      <div class="container-fluid">
        <div className="nav">
          <label for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />
          <div class="menu"></div>
        </div>
        <a href="#">
          <img
            className="navlogo"
            src="images/logo.png"
            alt="logo"
            width="100px"
            height="100px"
          ></img>
        </a>

        <div className="Nav_links">
          <ul className="Navbtn">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li>
              <a href="#">Deals</a>
            </li>
          </ul>
        </div>

        <div class="input-group">
          <span>
            <input
              type="text"
              class="form-control ml-15"
              placeholder=" What are you looking for?"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </span>
        </div>
        <div className="container">
          <button type="button" className="tempe ">
            <LocationOnOutlinedIcon /> Tempe
          </button>
        </div>

        <div className="items">
          <div className="flex-item1">
            <button className="btnicon">
              <LocalShippingOutlinedIcon />
            </button>
          </div>
          <div className="flex-item2">
            <button className="btnicon">
              <PersonOutlineOutlinedIcon />{" "}
            </button>
          </div>
          <div className="flex-item3">
            <button className="btnicon">
              <FavoriteBorderOutlinedIcon />
            </button>
          </div>
          <div className="flex-item4">
            <button className="btnicon">
              <ShoppingBasketIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
