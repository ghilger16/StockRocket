import React, { useState, useContext } from "react";
import { Context } from "../contexts/Context";
import { Alert } from "react-bootstrap";

const TradingModal = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { getStockInfo, stockInfo, setStockInfo, error, setAlertError, userShareQuantity, setUserShareQuantity, setUserHoldings, userHoldings, setAlertVariant, alertVariant } = useContext(Context);

    const handleStockInfoSubmit = (e) => {
        e.preventDefault();
        getStockInfo(searchQuery);
    };

    const handleOnChange = (e) => {
        setSearchQuery(e.target.value.split(" ").join("").toUpperCase());
        if (searchQuery) {
            setAlertError("");
            setStockInfo("");
            setUserShareQuantity("");
        };
    };

    const handleUserHoldingsSubmit = (e) => {
        e.preventDefault();
        if (!userShareQuantity) {
            return setAlertError("Value Cannot Be Accepted", "danger");
        }
            let newPurchase = {
            id: Math.random(),
            symbol: stockInfo.symbol,
            companyName: stockInfo.companyName,
            shares: userShareQuantity,
        };
        const newPurchaseArray = [...userHoldings, newPurchase];
        setUserHoldings(newPurchaseArray);
        setAlertError("Order Placed!", "success");
        
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
                    <div class="col-5">

                        <h6>Symbol</h6>
                        <form onSubmit={handleStockInfoSubmit}>
                            <input type="input" value={searchQuery.toUpperCase()} onChange={handleOnChange}/>
                        </form>

                    </div>
                    <div class="col ml-1">

                    </div>
                </div>
            </div>

            {(stockInfo.symbol && searchQuery) ?
                <div>
                    <p class="d-flex justify-content-start mt-4 ml-5">{stockInfo.companyName}</p>
                    <div class="container ml-5">
                        <div class="row">
                            <div class="col-4 border-top border-right">

                                <p>{currentPrice}</p>
                                <p class={isNegative}>{stockInfo.change}  ({changePercent.toFixed(2)}%)</p>

                            </div>
                            <div class="col-6 border-top">

                                <p>52 week range {stockInfo.week52Low.toFixed(2)} - {stockInfo.week52High.toFixed(2)}</p>
                                <p>Volume</p>

                            </div>
                        </div>
                    </div>

                    <div class="container mt-4">
                        <div class="row ml-5">
                            <div class="col-4">

                                <p>Quantity (shares)</p>
                                <form onSubmit={handleUserHoldingsSubmit}>
                                <input type="number" class="form-control" onChange={(e) => setUserShareQuantity(e.target.value)} />
                                </form>
                            </div>
                            <div class="col ml-5">

                                <p>Estimated Balance</p>
                                <p>{`$${estimatedBalance}`}</p>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center mt-4">
                        {!error && <button class="btn btn-primary" onClick={handleUserHoldingsSubmit}>Submit</button>}
                    </div> 
                </div>
                : <span class="rocket-image"><img src="images/rocket.jpg" alt="" /></span>}
        </div>
    );
        
};

export default TradingModal