import React from "react";

export default function Cart(props) {
  const {cartItems, onAdd} = props;
  return (
    <aside className="block col-1">
      <h2>My Cart</h2>
      <div>
        {cartItems.length === 0 && <div>Oops, your cart is empty!</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div>1</div>
          </div>
        ))}
      </div>
      
    </aside>
  );
}