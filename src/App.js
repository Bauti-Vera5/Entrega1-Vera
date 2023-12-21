
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css"
import ItemCount from "./components/ItemCount/ItemCount.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout } from './components/Checkout/Checkout';
import { CartProvider } from "./components/Context/CartContext.js";
import { getDocs, collection } from "firebase/firestore";
import { Cart } from "./components/Cart/Cart.js";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={"Todos nuestros productos"} />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos por categoria"} />} />
                        <Route path="/item/:itemId" element={<ItemListContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                    </Routes>

                </CartProvider>
            </BrowserRouter>
        </div>
    )
}



export default App;