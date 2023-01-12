import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.examples) {
    // return "Hello from example";
    return (
      <div className="Example">
        <em>"{props.examples}"</em>
      </div>
    );
  } else {
    return null;
  }
}
