import React from "react";
import { Container } from "semantic-ui-react";

export default props => {
  return (
    <div>
      <h1>Im a header</h1>
      {props.children}
      <h2>Im a header</h2>
    </div>
  );
};
