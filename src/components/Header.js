import React from "react";

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="wrap_header">
      <div>
        <a href="#/" className="nav-link">
          <h1>Paws n Play</h1>
        </a>
      </div>
      <div id="menu-outer">
        <div class="table">
          <ul id="horizontal-list">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            
          </ul>
        </div>
      </div>

      <div className="header-icons">
      <a href="#/cart" className="nav-link">
          My Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
      </div>

    </header>
  );
}
