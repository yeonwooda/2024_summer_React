import Blue from "./Blue";

function App() {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "10px",
  };
  return (
    // blue 박스 1000개 만들면 집
    <div style={style}>
      {Array(1000)
        .fill()
        .map(() => {
          return <Blue></Blue>;
        })}
    </div>
  );
}
export default App;
