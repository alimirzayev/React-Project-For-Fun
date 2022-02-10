import React from "react";

function Reciept(props) {
  return (
    <ol>
      {props.basket.map((basketItem) => {
        let product = props.products.find((a) => a.id === basketItem.id);
        return (
          <li>
            {product.name} x{basketItem.count} = $
            {basketItem.count * product.price}
          </li>
        );
      })}
    </ol>
  );
}

export default Reciept;
