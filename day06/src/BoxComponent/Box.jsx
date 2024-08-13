import { useState } from "react";
//box 컴포넌트 만들고 [w100 h 100 ] 배경색 blue
// 클릭하면 red -> blue -> red

const Box = () => {
  const [backgroundColor, setbackgroundColor] = useState("red");

  const changeBG = () => {
    setbackgroundColor(backgroundColor == "red" ? "blue" : "red");
  };
  const boxStyle = {
    backgroundColor: backgroundColor,
  };
  return <div className="w-24 h-80" onClick={changeBG} style={boxStyle}></div>;
};
export default Box;

// const Colors = () => {
//   const [color, setColor] = useState("blue");
//   const style = {
//     widht: "100px",
//     height: "100px",
//     backgoundColor: "blue",
//   };
//   const changeColor = () => {
//     setColor(color === "blue" ? "red" : "blue");
//   };

//   return (
//     <div style={style} onClick={changeColor}>
//       {color}
//     </div>
//   );
// };

// export default Colors;
