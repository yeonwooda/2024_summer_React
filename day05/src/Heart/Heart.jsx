// 빈하트 & 꽉찬 하트 prop로 true 주면 꽉찬하트가 나오고 false를 주면 빈하트가 나오도록 코드 컴포넌트 만들기

import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";

const Heart = () => {
  const [isLove, setIsLove] = useState(false);

  const changeLove = () => {
    setIsLove(!isLove);
  };
  return (
    <div onClick={changeLove}>{isLove ? <FaHeart /> : <IoMdHeartEmpty />}</div>
  );
};
export default Heart;
{
  /* <div>
      <Heart isLove={true}></Heart>
      <Heart isLove={false}></Heart>
    </div> */
}
