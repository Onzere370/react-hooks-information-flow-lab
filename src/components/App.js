import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
 

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <Header onDarkModeClick={onDarkModeClick} />
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Dark Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;


// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";
// import Header from "./Header";
// import Filter from "./Filter";

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   function onDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }

//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <Header onDarkModeClick={onDarkModeClick} />
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={onDarkModeClick}>
//           {isDarkMode ? "Dark" : "Light"} Mode
//         </button>
//       </header>
//       <Filter />
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;