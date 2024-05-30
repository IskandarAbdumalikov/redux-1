import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/notFound/NotFound";
import Plus from "./components/plus/Plus";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;
