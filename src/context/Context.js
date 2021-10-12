import React, { useEffect, useState } from "react";

const Context = React.createContext();

// Generally, the props are passed into the function, but we are destructuring the props object to grab the children key
function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

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

    function toggleFavorite(id) {
        // This method allows us to not modify the state. So we map through the entire array
        const newArray = allPhotos.map(photo => {
            // If the id matches, we return the photo object with it's isFavorite property flipped
            if(photo.id === id) {
                return {
                    // We use the spread operator to include all other properties of the object along with the modified isFavorite key
                    ...photo,
                    isFavorite: !photo.isFavorite
                };
            }
            // Return the original object that is not modified if the id does not match
            return photo;
        });

        setAllPhotos(newArray); 
    }

    function addToCart(img) {
        setCartItems(prevState => [...prevState, img]);
    }

    function removeFromCart(id) {
        // In the nature of not directly editting state, we can filter the results and return all the images that do not have the id of the selected image. 

        const newCart = cartItems.filter(item => item.id !== id); 
        setCartItems(newCart);
    }
    
    useEffect(() => {
      fetchData();
    }, []);

    return (
        <Context.Provider value={{ allPhotos, cartItems, toggleFavorite, addToCart, removeFromCart }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider , Context };