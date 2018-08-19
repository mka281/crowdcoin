import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";

export default props => {
  return (
    <div>
      <Header />
      {props.children}
      <h2>Im a header</h2>
    </div>
  );
};
