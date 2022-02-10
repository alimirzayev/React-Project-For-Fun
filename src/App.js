import { useState, useEffect } from "react";
import "./App.css";
import Product from "./Components/Product";
import Header from "./Components/Header";
import Reciept from "./Components/Reciept";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Big Mac",
      price: 20000,
      image: "https://neal.fun/spend/images/big-mac.jpg",
    },
    {
      id: 2,
      name: "Air Jordans",
      price: 125,
      image: "https://neal.fun/spend/images/air-jordans.jpg",
    },
    {
      id: 3,
      name: "Airpods",
      price: 199,
      image: "https://neal.fun/spend/images/airpods.jpg",
    },
    {
      id: 4,
      name: "Bike",
      price: 2000,
      image: "https://neal.fun/spend/images/bike.jpg",
    },
    {
      id: 5,
      name: "Tesla",
      price: 75000,
      image: "https://neal.fun/spend/images/tesla.jpg",
    },
    {
      id: 6,
      name: "Bike",
      price: 78000,
      image: "https://neal.fun/spend/images/mona-lisa.jpg",
    },
    {
      id: 7,
      name: "Monster Truck",
      price: 150000,
      image: "https://neal.fun/spend/images/monster-truck.jpg",
    },
    {
      id: 8,
      name: "Single Family Home",
      price: 300000,
      image: "https://neal.fun/spend/images/single-family-home.jpg",
    },
    {
      id: 9,
      name: "Yacht",
      price: 7500000,
      image: "https://neal.fun/spend/images/yacht.jpg",
    },
    {
      id: 10,
      name: "M1 Abrams",
      price: 8000000,
      image: "https://neal.fun/spend/images/yacht.jpg",
    },
    {
      id: 11,
      name: "Formula 1 Car",
      price: 8500000,
      image: "https://neal.fun/spend/images/formula-1-car.jpg",
    },
    {
      id: 12,
      name: "Skyscraper",
      price: 9000000,
      image: "https://neal.fun/spend/images/skyscraper.jpg",
    },
  ]);

  const [balance, setBalance] = useState(277000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = basket
      .map((basketItem) => {
        let find = products.find((product) => product.id === basketItem.id);
        return find.price * basketItem.count;
      })
      .reduce((a, b) => a + b, 0);
    setTotal(sum);
  }, [basket]);


  return (
    <div className="container">
      <Header balance={balance - total} />
      <div className="products">
        {products.map((item) => (
          <Product
            key={item.id}
            item={item}
            basket={basket}
            balance={balance - total}
            setBasket={setBasket}
          />
        ))}
      </div>
      <Reciept basket={basket} products={products} />
    </div>
  );
}
export default App;
