import React, { useState, useEffect } from "react";
import axios from 'axios';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [error, setError] = useState("");
    const [alertVariant, setAlertVariant] = useState("");
    const [stockInfo, setStockInfo] = useState([]);
    const [userHoldings, setUserHoldings] = useState([]);
    const [userShareQuantity, setUserShareQuantity] = useState(0);
  
    const getStockInfo = async (searchQuery) => {
        axios
            .get(`/stock/${searchQuery}`)
            .then((response) => {setStockInfo(response.data)     
            })
            .catch((error) => {
                setAlertError(`No information found for ${searchQuery}`, "danger");
            });
    };

    const setAlertError = (error, variant) => {
        setError(error);
        setAlertVariant(variant);
    };
   
    const value = {
        currentUser,
        getStockInfo,
        stockInfo,
        setStockInfo,
        error,
        setAlertError,
        setAlertVariant,
        alertVariant,
        userShareQuantity,
        setUserShareQuantity,
        setUserHoldings,
        userHoldings
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };

