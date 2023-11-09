import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <section class="hero is-info">
                <h3 class="title">Ecommerce</h3>
            </section>
            <div>
                <button>Remeras</button>
                <button>Hodies</button>
                <button>Pantalones</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}



export default Navbar;