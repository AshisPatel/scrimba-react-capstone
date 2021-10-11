import React, { useEffect, useState } from "react";

const { Provider, Consumer } = React.createContext();

// Generally, the props are passed into the function, but we are destructuring the props object to grab the children key
function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState(["photo1", "photo2"]);

    async function fetchData() {
        const response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json',
            {
                method: "GET"
            });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            alert("There was an issue retrieving the photos");
        }

    }

    useEffect(() => {
      fetchData();
    }, []);

    return (
        <Provider value={{ allPhotos }}>
            {children}
        </Provider>
    );
};

export { ContextProvider, Consumer as ContextConsumer };