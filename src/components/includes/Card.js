import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div class="card">
            <img src="images/2.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Billy</h5>
              <p class="card-text">Bookcase31 1/2x11x79 1/2 "</p>
              <h6>
                <b>$49.00</b>
              </h6>
              <div className="star">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
              </div>
              <p>More variants</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div class="card">
            <img src="images/4.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Billy</h5>
              <p class="card-text">Bookcase, 3/4x11x79 1/2 "</p>
              <h6>
                <b>$39.00</b>
              </h6>
              <div className="star">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
              </div>
              <p>More variants</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div class="card">
            <img src="images/6.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Billy</h5>
              <p class="card-text">Bookcase, 1/2x11x93 1/4 "</p>
              <h6>
                <b>$74.00</b>
              </h6>
              <div className="star">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
              </div>
              <p>More variants</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div class="card">
            <img src="images/8.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Billy</h5>
              <p class="fs-6">Bookcase dark blue/4x79 1/2 "</p>
              <h6>
                <b>$29.00</b>
              </h6>
              <div className="star">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
                <p>More variants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default Card;
