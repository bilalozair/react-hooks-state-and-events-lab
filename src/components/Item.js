import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const btnText = inCart ? "Remove From Cart" : "Add to Cart";
  const liClass = inCart ? "in-cart" : "";

  function handleAddToCart() {
    setInCart((inCart) => !inCart);
  }
  
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{btnText}</button>
    </li>
  );
}

export default Item;
