
const Item = ({id, name,img,price, stock}) =>{
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p>
                    Stock disponoble: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <link to={"/Item/${id}"} className="Option">Ver detalle</link>
            </footer>
        </article>
    )
}