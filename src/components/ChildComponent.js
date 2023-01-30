import React from "react";

const ChildComponent = (props) => {
  return (
    <div id="child">
      Find The Square <br />
      {props.children}
    </div>
  );
};

export default ChildComponent;
