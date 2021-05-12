import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import data from "./data";
import { useState } from "react";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Cart onAdd={onAdd} cartItems={cartItems}></Cart>
      </div>
    </div>
  );
}

export default App;
