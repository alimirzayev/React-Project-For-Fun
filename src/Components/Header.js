import React from "react";

function Header(props) {
  return (
    <header>
      $ {props.balance}
    </header>
  );
}

export default Header;
