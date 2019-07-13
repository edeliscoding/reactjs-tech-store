import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">Products</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">Name of product</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">Price</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">Quantity</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">Remove</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
        {/* end of single column */}
      </div>
    </div>
  );
}
