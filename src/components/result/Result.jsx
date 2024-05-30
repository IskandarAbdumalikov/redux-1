import { useSelector } from "react-redux";


const Result = () => {
  let count = useSelector((state) => state.counter.value);

  return (
    <div className="result">
      <div className="result__btn">{count}</div>
    </div>
  );
}

export default Result