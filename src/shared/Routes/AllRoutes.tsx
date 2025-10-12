import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Landing page/Home";

export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/menu" element={<h1>Menu Page</h1>} />
          <Route path="/booking" element={<h1>Booking Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
