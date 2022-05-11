import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/views/Layout";
import Home from "./components/views/Home";
import NewArrivals from "./components/views/NewArrivals";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="newArrivals" element={<NewArrivals />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
