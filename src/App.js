import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/views/Layout";
import Home from "./components/views/Home";
import NewArrivalSlideshow from "./components/views/NewArrivalSlideshow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="newArrivalSlideshow" element={<NewArrivalSlideshow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
