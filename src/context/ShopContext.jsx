import React, { createContext, useState, useEffect } from 'react';
import all_product from "../assets/all_product";

// Creating a context for the shop
export const ShopContext = createContext(null);

// Function to initialize the cart with default values
const getDefaultCart = () => {
    let cart = {};
    // Initialize each product in the cart with a quantity of 0
    for (let i = 0; i < all_product.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

// ShopContextProvider component to provide context values to its children
const ShopContextProvider = (props) => {
    // State to hold the cart items
    const [cartItem, setCartItems] = useState(getDefaultCart());

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        // Update the state to increment the quantity of the item
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        // Log the updated quantity of the item
        console.log(cartItem[itemId]);
    }

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        // Update the state to decrement the quantity of the item
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        // Log the updated quantity of the item
        console.log(cartItem[itemId]);
    }

    // Function to calculate total bill from the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
            }
        }
        return totalAmount;
    }

    // Function to count Cart Items
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }



    // useEffect hook to log the cart state whenever it changes
    useEffect(() => {
        console.log(cartItem);
    }, [cartItem]);

    // Context value containing the products, cart items, and functions to add/remove items
    const contextValue = { all_product, cartItem, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    // Providing the context value to the children components
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
