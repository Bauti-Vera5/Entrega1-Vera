import imgcc from "../CartWidget/assets/shoppingcart_80945.svg";
import  Cart  from "../Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to={"/cart"} className="CartWidget" style={{display: totalQuantity > 0 ? "block" :"none"}}>
            <img src={imgcc} alt="carrito" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;