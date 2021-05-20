import React from "react";

export default function Header(props) {
  const { countCartItems } = props;
  return (
      <div className="sticky header">
        <a href="#default" className="logo">Paws N Play</a>
        <div className="header-right">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#sale">Sale</a>
          <a href="#features">Features</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#/cart">
            My Cart{" "}
            {countCartItems ? (
              <button className="badge">{countCartItems}</button>
            ) : (
              ""
            )}
          </a>
        </div>
    </div>
  );
}
