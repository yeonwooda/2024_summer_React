const Circle = (props) => {
  const style = {
    width: "100px",
    height: "100px",
    borderRadius: "9999px",
    backgroundColor: props.backgroundColor,
  };
  return <div style={style}></div>;
};

export default Circle;
