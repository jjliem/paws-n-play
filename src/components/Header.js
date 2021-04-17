import React from "react";

export default function Header(props) {
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Paws n Play</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">My Cart</a> <a href="#/signin">Sign In</a>
      </div>
    </header>
  )
}