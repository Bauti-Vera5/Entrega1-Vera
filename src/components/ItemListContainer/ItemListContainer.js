import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory} from "../../asyncMock";
import useParams from "react-router-dom";

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])

    const{ categoryId} = useParams()
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [categoryId])

    
    return(
        <div>
            <section>
                <h1>{greeting}</h1>
                <ItemList products={products}/>
            </section>
        </div>
    )
} 

export default ItemListContainer;