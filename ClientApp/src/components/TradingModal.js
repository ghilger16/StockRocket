import React, { useState, useContext } from "react";
import { Context } from "../contexts/Context";
import { Alert } from "react-bootstrap";

const TradingModal = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [alertVariant, setAlertVariant] = useState("danger");
    const { getStockInfo, stockInfo, setStockInfo, error, setError, userShareQuantity, setUserShareQuantity, setUserHoldings, userHoldings } = useContext(Context);

    const handleStockInfoSubmit = (e) => {
        e.preventDefault();
        getStockInfo(searchQuery);
    };

    const handleOnChange = (e) => {
        setSearchQuery(e.target.value.split(" ").join("").toUpperCase());
        if (!searchQuery) {
            setError("");
            setStockInfo("");
        };
    };

    const handleUserHoldingsSubmit = (e) => {
        e.preventDefault();
        if (!userShareQuantity) {
            return setError("Quantity Form is Empty!");
        };
        let newPurchase = {
            id: Math.random(),
            symbol: stockInfo.symbol,
            companyName: stockInfo.companyName,
            shares: userShareQuantity,
        };
        console.log(newPurchase);
        const newPurchaseArray = [...userHoldings, newPurchase];
        setUserHoldings(newPurchaseArray);
        setAlertVariant("success");
        setError("Order Placed!");
    };
   
    const currentPrice = !stockInfo.isUSMarketOpen ? stockInfo.latestPrice : stockInfo.close;
    const changePercent = stockInfo.changePercent * 100;
    const isNegative = (Math.sign(stockInfo.change) == -1) ? "negative" : "positive";
    const estimatedBalance = userShareQuantity ? userShareQuantity * currentPrice : "--.--";
    

    return (
        <div>
            <h1 class="d-flex justify-content-center">Enter Order</h1>
            {error && searchQuery && <Alert variant={alertVariant}>{error}</Alert>}
            <div class="container">
                <div class="row">
                    <div class="col-5 mt-2">

                        <h4>Symbol</h4>
                        <form onSubmit={handleStockInfoSubmit}>
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
                                <form onSubmit={handleUserHoldingsSubmit}>
                                <input type="input" class="form-control" onChange={(e) => setUserShareQuantity(e.target.value)} />
                                </form>
                            </div>
                            <div class="col ml-5">

                                <h5>Estimated Balance</h5>
                                <p>{`$${estimatedBalance}`}</p>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center mt-4">
                        <button class="btn btn-primary" onClick={handleUserHoldingsSubmit}>Submit</button>
                    </div> 
                </div>
                : <span class="rocket-image"><img src="images/rocket.jpg" alt="" /></span>}
        </div>
    );
        
};

export default TradingModal