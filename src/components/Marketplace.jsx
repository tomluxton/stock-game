import React from "react";
import { NavLink } from "react-router-dom";

function Marketplace() {
  return (
    <div className="Marketplace">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Marketplace</h1>
            <p>
              This is where you can buy and sell stocks.
            </p>
          </div>
        </div>
        <div className="row">
        <div className="col-sm">
          <NavLink className="nav-link" to = "/marketplace/stock1">Stock 1</NavLink>
        </div>
        <div className="col-sm">Stock 2</div>
        <div className="col-sm">Stock 3</div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;