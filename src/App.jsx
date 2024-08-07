import "./App.css";
import User from "./compnents/User";
import ProductList from "./compnents/ProductList";
import Button from "./compnents/Button";
import StatusMessage from "./compnents/StatusMessage";
import PracticeUseEffect from "./compnents/PracticeUseEffect";

const Users = [
  {
    name: "Waseem",
    age: 24,
    email: "waseem@gmail.com",
  },
  {
    name: "Tooba",
    age: 21,
    email: "tooba@gmail.com",
  },
  {
    name: "Hashim",
    age: 23,
    email: "hashim@gmail.com",
  },
  {
    name: "Hammad",
    age: 22,
    email: "hammad@gmail.com",
  },
];

const products = [
  { name: "Product 1", price: 29.99, description: "This is product 1" },
  { name: "Product 2", price: 39.99, description: "This is product 2" },
  { name: "Product 3", price: 19.99, description: "This is product 3" },
];
function App() {
  return (
    <>
      <User {...Users[0]} />
      <User {...Users[1]} />
      <User {...Users[2]} />
      <User {...Users[3]} />
      <ProductList products={products} />
      <Button label="cancle" />
      <Button label="submit" />
      <h1>Conditional Rendering Example</h1>
      <StatusMessage isLoggedIn={true} />
      <StatusMessage isLoggedIn={false} />
      <PracticeUseEffect />
    </>
  );
}

export default App;
