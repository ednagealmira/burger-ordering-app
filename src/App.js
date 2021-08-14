import "./App.css";
import Count from "./Count.js";

function App() {
  return (
    <div className="container">
      <Count order="Burger Deluxe" price="7.39" />
      <Count order="Supreme Cheeseburger" price="8.19" />
      <Count order="Turkey Burger" price="6.49" />
      <Count order="Spicy Chicken Sandwich" price="7.19 " />
      <Count order="Menu A" price="7.19 " />
      <Count order="Menu B" price="7.19 " />
    </div>
  );
}

export default App;
