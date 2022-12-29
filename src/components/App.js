import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [mode, setMode] = useState(true)

  const appClass = mode ? "App light" : "App dark";

  function toggleMode() {
    setMode((mode) => !mode)
  }

  return (
    <div className= {appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>{mode ? "Light Mode" : "Dark Mode"} </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
