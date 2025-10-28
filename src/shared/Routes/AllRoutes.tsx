import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Landing page/Home";
import Menu from "../../pages/Menu/Menu";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Booking from "../../pages/Booking/Booking";
import SingleCategory from "../../pages/Menu/components/SingleCategory";

export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/menu/:id" element={<SingleCategory/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
