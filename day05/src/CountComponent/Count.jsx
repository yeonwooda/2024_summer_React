// Count 컴포넌트 만들고, 클릭하면 알럿으로 숫자 1 나오도록 만들기

import { useState } from "react";

const Count = () => {
  // react : props + state(상태)
  // useState(초깃값)
  const [num, setnum] = useState(1);
  const [fruits, setFruits] = useState("🍒");

  const changeNum = () => {
    setnum(num + 1);
  };

  const changeFruits = () => {
    setFruits(fruits === "🍒" ? "🍓" : "🍒");
  };

  return (
    <>
      <div onClick={changeNum}>{num}</div>
      <div onClick={changeFruits}>{fruits}</div>
    </>
  );
};
export default Count;
