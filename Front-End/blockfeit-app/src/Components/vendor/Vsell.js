import React from "react";
import "../../style/Vsell.css";

function Vsell() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <form class="form-horizontal" align="center">
              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id1">
                  Product Id{" "}
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="text"
                    id="id1"
                    placeholder="Enter Product Id "
                    required
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  Retailer Public Key
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="text"
                    id="id2"
                    placeholder="Enter Retailer Public Key "
                    required
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  Retailer Private Key
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="text"
                    id="id2"
                    placeholder="Enter Retailer Private Key"
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  Customer Name{" "}
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="text"
                    id="id2"
                    placeholder="Enter Customer Name"
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  Customer Public Key{" "}
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="text"
                    id="id2"
                    placeholder="Enter Customer Public Key"
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  Amount
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="text"
                    id="id2"
                    placeholder="Enter Amount"
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 control-label" for="id2">
                  Payment Method
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="text"
                    id="id2"
                    placeholder="Enter Payment Method"
                    required
                  />
                </div>
              </div>

              <div class="container">
                <button type="button" class="btn btn-success">
                  {" "}
                  Sell Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Vsell;
