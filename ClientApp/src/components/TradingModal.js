import React from "react";
import Signup from "../components/Signup"

const TradingModal = () => {

    return (
        <div>

            <h1 class="d-flex justify-content-center">Enter Order</h1>
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <h4>Symbol</h4>
                        <input type="input" class="form-control"/>
                    </div>
                    <div class="col ml-3">
                        <p>Current position:</p>
                        <p>526 Shares</p>
                    </div>
                </div>
            </div>

            <h3 class="d-flex justify-content-start mt-3 ml-5">OpenDoor Technologies</h3>
            <div class="container ml-5">
                <div class="row">
                    <div class="col-4 border-top border-right">
                        <h4>$17.55</h4>
                        <h4>-.43 (-2.39%)</h4>
                    </div>
                    <div class="col-5 border-top">
                        <h4>52 week range</h4>
                        <h4>Volume</h4>
                    </div>
                </div>
            </div>

            <div class="container mt-4">
                <div class="row ml-5">
                    <div class="col-4">
                        <h5>Quantity (shares)</h5>
                        <input type="input" class="form-control" />
                     </div>
                    <div class="col ml-5">
                        <h5>Estimated Balance</h5>
                        <p>$--.--</p>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center mt-4">
                <button class="btn btn-primary">Submit</button>
                </div>
        </div>
    )
};

export default TradingModal