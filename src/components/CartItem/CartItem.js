
import React from 'react';

const CartItem = ({ item }) => {
  const { id, nombre, cantidad, precio } = item;

  return (
    <div className="cart-item">
      <p>{nombre}</p>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${precio}</p>
      {/* Puedes agregar más información o acciones según tus necesidades */}
    </div>
  );
};

export default CartItem;



