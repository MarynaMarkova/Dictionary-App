import React from "react";

export default function Example(props) {
  if (props.examples) {
    // return "Hello from example";
    return (
      <div className="Example">
        <strong>Example: </strong>
        <em>{props.examples}</em>
      </div>
    );
  } else {
    return null;
  }
}
