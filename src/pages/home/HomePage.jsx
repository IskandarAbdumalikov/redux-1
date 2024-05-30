import Plus from "../../components/plus/Plus";
import Result from "../../components/result/Result";
import Minus from "../../components/minus/Minus";
import Reset from "../../components/reset/Reset";
import "./home.scss";

const HomePage = () => {
  return (
    <section>
      <div className="counter">
        <h1>Counter app</h1>
        <div className="top">
          <Plus />
          <Result />
          <Minus />
        </div>
        <div className="bottom">
          <Reset />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
