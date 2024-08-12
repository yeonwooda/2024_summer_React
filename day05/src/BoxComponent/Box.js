const Box = (props) => {
  const greenStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: props.backgroundColor,
  };

  return <div style={greenStyle}></div>;
};

export default Box;
