import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    //function for signup (email, password){
    //setCurrentUser(user)


    const value = {
        currentUser
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };

