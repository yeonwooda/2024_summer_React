// 둥글게 만들고, 배경색은 옅은 하늘색 만들고
// 글씨는 크게 만들고, 가운데로 배치해주고
// 글씨는 props로 받고

const Circle = (props) => {
  return (
    <div className="flex justify-center items-center w-24 h-24 rounded-full bg-sky-100 text-xl">
      <span>{props.name}</span>
    </div>
  );
};

export default Circle;
