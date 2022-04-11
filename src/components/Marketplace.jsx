import React from "react";
import { NavLink } from "react-router-dom";

function Marketplace() {
  return (
    <div className="Marketplace">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Marketplace</h1>
            <p>
              This is where you can buy and sell stocks.
            </p>
          </div>
        </div>
        <div class="row">
        <div class="col-sm">
          <NavLink className="nav-link" to = "/marketplace/stock1">Stock 1</NavLink>
        </div>
        <div class="col-sm">Stock 2</div>
        <div class="col-sm">Stock 3</div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;