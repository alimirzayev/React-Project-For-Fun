import React from "react";

function Product(props) {
  const addToBasket = () => {
    let find = props.basket.find((a) => a.id === props.item.id);
    if (find) {
      find.count++;
      props.setBasket([...props.basket.filter((a) => a.id !== find.id), find]);
    } else {
      props.setBasket([...props.basket, { id: props.item.id, count: 1 }]);
    }
  };

  const removeFromBasket = () => {
    let find = props.basket.find((a) => a.id === props.item.id);
    if (find.count > 1) {
      find.count--;
      props.setBasket([...props.basket.filter((a) => a.id !== find.id), find]);
    } else {
      props.setBasket([...props.basket.filter((a) => a.id !== find.id)]);
    }
  };

  const changeCount = (e) => {
    if (e.target.value * props.item.price > props.balance) {
      return;
    }
    let find = props.basket.find((a) => a.id === props.item.id);
    if (find) {
      find.count = e.target.value;
      props.setBasket([...props.basket.filter((a) => a.id !== find.id), find]);
    } else {
      props.setBasket([
        ...props.basket,
        { id: props.item.id, count: e.target.value },
      ]);
    }
  };

  return (
    <div className="product">

      <div className="productImg">
        <img src={props.item.image} alt="" />
      </div>

      <div className="productTitle">
        <h2>{props.item.name}</h2>
      </div>

      <div className="productPrice">
        <h2 style={{ color: "#12dfac" }}>$ {props.item.price}</h2>
      </div>

      <div className="productContainer">
        <button
          disabled={props.item.price > props.balance}
          onClick={addToBasket}
          className="buy"
        >
          Buy
        </button>

        <input
          type="number"
          onChange={changeCount}
          value={
            props.basket.find((a) => a.id === props.item.id)
              ? props.basket.find((a) => a.id === props.item.id).count
              : 0
          }
        />

        <button
          disabled={!props.basket.find((a) => a.id === props.item.id)}
          onClick={removeFromBasket}
          className="sell"
        >
          Sell
        </button>
      </div>

    </div>
  );
}

export default Product;
