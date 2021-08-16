import React, { useState, useEffect } from "react";
import axios from 'axios';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [error, setError] = useState('');
    const [stockInfo, setStockInfo] = useState([]);
    const [userShareQuantity, setUserShareQuantity] = useState(0);

    const getStockInfo = async (searchQuery) => {
        axios
            .get(`/stock/${searchQuery}`)
            .then((response) => {setStockInfo(response.data)     
            })
            .catch((error) => {
                setError(`No information found for ${searchQuery}`);
            });
    };

    const value = {
        currentUser,
        getStockInfo,
        stockInfo,
        setStockInfo,
        error,
        setError
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };

