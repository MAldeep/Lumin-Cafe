import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Landing page/Home";
import Menu from "../../pages/Menu/Menu";

export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/booking" element={<h1>Booking Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
