import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="NavBar">
            <link to="/">
                <h3 class="title">Ecommerce</h3>
            </link>
            <div className="Categorias">
                <NavLink to={`/category/Remera`} className={({IsActive}) => IsActive ? `ActiveOption` : `Option`}>Remeras</NavLink>
                <NavLink to={`/category/Hodies`} className={({IsActive}) => IsActive ? `ActiveOption` : `Option`}>Hodies</NavLink>
                <NavLink to={`/category/Pantalones`} className={({IsActive}) => IsActive ? `ActiveOption` : `Option`}>Pantaloness</NavLink>
                <NavLink to={`/category/Accesorios`} className={({IsActive}) => IsActive ? `ActiveOption` : `Option`}>Accesorios</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}



export default Navbar;