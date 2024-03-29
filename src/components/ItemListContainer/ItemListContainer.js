import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const collectionRef = categoryId
                    ? query(collection(db, "products"), where("category", "==", categoryId))
                    : collection(db, "products");

                const response = await getDocs(collectionRef);

                const productsAdapted = response.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(productsAdapted);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();


    }, [categoryId]);

    return (
        <div>
            <h2>{greeting}</h2>
            {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;
