const MyButton = (props) => {
  const shape = {
    hard: "0px",
    smooth: "5px",
    round: "45px",
  };

  const state = {
    primary: {
      backgroundColor: "#205bf3",
      color: "white",
      border: "none",
    },
    hover: {
      backgroundColor: "#478df5",
      color: "white",
      border: "none",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "black",
      border: "1px solid #205bf3",
    },
    deactive: {
      backgroundColor: "#979797",
      color: "e8e8e8",
      border: "none",
    },
  };

  const buttonStyle = {
    padding: "10px 45px",
    fontSize: "32px",
    borderRadius: shape[props.shape],
    ...state[props.state], /// ...연산자 : 오브젝트 껍데기 벗겨줌
  };

  return <button style={buttonStyle}>Button</button>;
};
export default MyButton;
