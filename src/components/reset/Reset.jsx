import { reset } from "../../context/slice/counterSlice";
import { useDispatch } from "react-redux";

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <button className="reset__btn" onClick={() => dispatch(reset(""))}>
      Reset
    </button>
  );
};

export default Reset;
