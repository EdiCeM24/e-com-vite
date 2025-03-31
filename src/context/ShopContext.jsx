import { createContext } from "react";
import { products } from "../components/Assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 100;
    const tax = 10;


    const value = {
        products, currency, delivery_fee, tax
    }

    return (
        <ShopContext.Provider value={value}>
              {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;