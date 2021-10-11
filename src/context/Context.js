import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

// Generally, the props are passed into the function, but we are destructuring the props object to grab the children key
function ContextProvider({ children }) {
    return (
        <Provider value="">
            {children}
        </Provider>
    );
};

export { ContextProvider, Consumer as ContextConsumer };