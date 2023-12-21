const products = [
    {
        id: "1",
        name:"Buzo Black",
        price: 6000,
        category: "Hodies",
        img: "./components/CartWidget/assets/buzo.jpg",
        stock: 10,
        description: "Descripcion del Buzo"
    },
    {
        id: "2",
        name:"Remera Over",
        price: 1000,
        category: "Remeras",
        img: "./components/CartWidget/assets/remera.jpg",
        stock: 10,
        description: "Descripcion de la remera"
    },
    {
        id: "3",
        name:"Cargo Stone",
        price: 7000,
        category: "Pantalones",
        img: "./components/CartWidget/assets/pantalon.jpg",
        stock: 9,
        description: "Descripcion del Cargo"
    },
    {
        id: "4",
        name:"Pulsera King",
        price: 600,
        category: "Accesorios",
        img: "./components/CartWidget/assets/pulsera.jpg",
        stock: 12,
        description: "Descripcion de la pulsera"
    }
];

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
};

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id === productId))
        }, 500)
    })
};