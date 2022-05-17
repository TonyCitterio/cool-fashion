import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/views/Layout";
import Home from "./components/views/Home";
import Guy from "./components/views/Guy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="guy" element={<Guy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
