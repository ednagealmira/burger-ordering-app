import "./App.css";
import Count from "./Count.js";

function App() {
  return (
    <div className="container">
      <Count
        order="Burger Deluxe"
        price="7.39"
        imglink="https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
      />
      <Count
        order="Supreme Cheeseburger"
        price="8.19"
        imglink="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=364&q=80"
      />
      <Count
        order="Turkey Burger"
        price="6.49"
        imglink="https://images.unsplash.com/photo-1566217688581-b2191944c2f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      />
      <Count
        order="Spicy Chicken Sandwich"
        price="7.19 "
        imglink="https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
      />
      <Count
        order="Onion Rings & Fries"
        price="6.29"
        imglink="https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <Count
        order="Chicken Strips"
        price="7.59 "
        imglink="https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
      />
    </div>
  );
}

export default App;
