import React, { useState, useContext } from "react";
import { Context } from "../contexts/Context";
import { Alert } from "react-bootstrap";

const TradingModal = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { getStockInfo, stockInfo, setStockInfo, error, setError } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery === "") {
            return setError("Search Form is Empty!");
        }
        getStockInfo(searchQuery);
        setError("");
    };

    const handleOnChange = ({ target }) => {
        setSearchQuery(target.value.split(" ").join("").toUpperCase());
        if (!searchQuery) {
            setError("");
            setStockInfo("");
        };
    }
   
    const currentPrice = stockInfo.isUSMarketOpen ? stockInfo.latestPrice : stockInfo.previousClose;
    const changePercent = stockInfo.changePercent * 100;
    const isNegative = (Math.sign(stockInfo.change) == -1) ? "negative" : "positive";
    

    return (
        <div>

            <h1 class="d-flex justify-content-center">Enter Order</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <div class="container">
                <div class="row">
                    <div class="col-5 mt-2">

                        <h4>Symbol</h4>
                        <form onSubmit={handleSubmit}>
                            <input type="input" value={searchQuery.toUpperCase()} onChange={handleOnChange}/>
                        </form>

                    </div>
                    <div class="col ml-3">

                        <p></p>
                        <p></p>

                    </div>
                </div>
            </div>

            {(stockInfo.symbol && searchQuery) ?
                <div>
                    <h3 class="d-flex justify-content-start mt-4 ml-5">{stockInfo.companyName}</h3>
                    <div class="container ml-5">
                        <div class="row">
                            <div class="col-4 border-top border-right">

                                <h5>{currentPrice}</h5>
                                <h5 class={isNegative}>{stockInfo.change}  ({changePercent.toFixed(2)}%)</h5>

                            </div>
                            <div class="col-6 border-top">

                                <h5>52 week range {stockInfo.week52Low.toFixed(2)} - {stockInfo.week52High.toFixed(2)}</h5>
                                <h5>Volume</h5>

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
                : <span class="rocket-image"><img src="images/rocket.jpg" alt="" /></span>}
        </div>
    );
        
};

export default TradingModal