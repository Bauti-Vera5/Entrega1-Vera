import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../"
import useParams from "react-router-dom";

const ItemDetailContainer =() => {
    const [product, setProduct] = useState(null)

    const{ itemId }= useParams()

    useEffect(()=>{
        getProductById("itemId")
        .then(Response => {
            setProduct(Response)
        })
        .catch(error =>{
            console.error(error)
        })

    }, [itemId])

        return(
            <div className="ItemDetailContainer">
                <ItemDetailContainer {...product}/>
            </div>
        )

}

export default ItemDetailContainer;