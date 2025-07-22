import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Pages/Home/Home";
import { Content } from "./components/Pages/Content/Content";

function App() {
  return (
    <>
      <Routes>
        <Route path="/fontend" element={<Home />}>
          <Route path="/fontend" element={<Content />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
