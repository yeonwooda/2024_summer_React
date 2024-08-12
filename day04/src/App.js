import MyButton from "./ButtonComponent/MyButton";

function App() {
  const stateArray = ["primary", "hover", "secondary", "deactive"];
  const shapeArray = ["hard", "smooth", "round"];
  return (
    <div>
      {stateArray.map((v) => {
        return shapeArray.map((x) => {
          return <MyButton shape={x} state={v}></MyButton>;
        });
      })}
    </div>
  );
}

export default App;
