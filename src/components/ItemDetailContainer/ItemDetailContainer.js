import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../service/firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, "products", itemId);
        getDoc(docRef)
            .then((response) => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return <p>Cargando producto...</p>;
    }

    return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
