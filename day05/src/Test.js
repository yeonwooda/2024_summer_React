const Test = () => {
  const bird = "키위새";
  const coffee = ["아아", "라떼", "우유"];
  return (
    <>
      <h1>{5 > 3 ? "장원영" : "안유진"}</h1>
      <h3>{bird}</h3>
      <span>{coffee.join("")}</span>
    </>
  );
};
export default Test;
