import { useDispatch } from "react-redux";
import { increment } from "../../context/slice/counterSlice";
import { useState } from "react";

const Plus = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(value));
    localStorage.setItem("counterValue", value);
  };

  return (
    <div className="plus">
      <input
        required
        placeholder="Enter a number"
        onChange={(e) => setValue(+e.target.value)}
        value={value === 0 ? "" : value}
        type="number"
      />
      <button className="plus__btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Plus;
