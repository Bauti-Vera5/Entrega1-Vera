import { createContext, useState } from "react";

export const CartContext= createContext({
    cart: []
});

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    console.log(cart);

    const AddItem= (item, quantity) =>{
        if(!IsInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        }
        else{
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    const ClearCart = () => {
        setCart([])
    }

    const IsInCart = (itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContext.Provider value={{cart,AddItem,removeItem,ClearCart}}>
        {children}
        </CartContext.Provider>
    )


} 