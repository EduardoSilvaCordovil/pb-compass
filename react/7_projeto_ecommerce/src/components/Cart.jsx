import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Não há items no carrinho.</p>
      ) : (
        <>
          {cartItems.map((item) => {
            <p>{item.name}</p>
          })}
        </>
      )}
    </div>
  );
};

export default Cart;
