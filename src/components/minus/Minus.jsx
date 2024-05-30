import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { decrement } from "../../context/slice/counterSlice";
import { useState } from "react";

const Minus = () => {
  let count = useSelector((state) => state.counter.value);
  let [value, setValue] = useState("");

  const dispatch = useDispatch();
  return (
    <div className="minus">
      <input
        placeholder="Enter a number"
        onChange={(e) => setValue(+e.target.value)}
        value={value === 0 ? "" : value}
        type="number"
      />
      <button
        className={count < value ? "minus__btn disabled" : "minus__btn"}
        disabled={count < value}
        onClick={() => dispatch(decrement(value))}
      >
        -
      </button>
    </div>
  );
};

export default Minus;
