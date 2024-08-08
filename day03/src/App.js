import Profile from "./Profile/Profile";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Profile></Profile>
    </div>
  );
}
export default App;
// const colors =
//   "#1abc9c",
//   "#2ecc71",
//   "#3498db",
//   "#9b59b6",
//   "#34495e",
//   "#16a085",
//   "#27ae60",
//   "#2980b9",
//   "#8e44ad",
//   "#2c3e50",
// ];

// <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
//   {colors.map((v, i) => {
//     return i % 2 == 0 ? (
//       <CirleBox backgroundColor={v}></CirleBox>
//     ) : (
//       <Box backgroundColor={v}></Box>
//     );

//     // if (i % 2 == 0) {
//     //   return <CirleBox backgroundColor={v}></CirleBox>;
//     // }
//     // return <Box backgroundColor={v}></Box>;
//   })}
// </div>
