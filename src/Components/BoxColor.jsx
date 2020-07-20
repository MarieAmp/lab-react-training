import React from 'react';

const BoxColor = (props) => {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }



  return (
    <div
      className="BoxColor"
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        height: '60px',
        color: 'black',
        fontWeight:'bold',
        textAlign:"center"
      }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  );
};

export default BoxColor;
