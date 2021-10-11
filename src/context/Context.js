import React, { useEffect, useState } from "react";

const Context = React.createContext();

// Generally, the props are passed into the function, but we are destructuring the props object to grab the children key
function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);

    async function fetchData() {
        const response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json',
            {
                method: "GET"
            });
        if (response.ok) {
            const data = await response.json();
            setAllPhotos(data);
        } else {
            alert("There was an issue retrieving the photos");
        }

    }

    useEffect(() => {
      fetchData();
    }, []);

    console.log(allPhotos);
    return (
        <Context.Provider value={{ allPhotos }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider , Context };