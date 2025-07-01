import {
  useLocation , Routes,
  Route
} from "react-router-dom";

import { Toaster } from "react-hot-toast";


// All page/component imports
import Home from "./pages/Home";
import About from "./pages/About";
import Exprience from "./pages/Exprience";
import AllRooms from "./pages/AllRooms";
import RoomDetail from "./pages/RoomDetail";
import MyBooking from "./pages/MyBooking";
import LayOut from "./pages/hotelOwner/LayOut";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";
import Footer from "./layout/Footer.jsx";
import { useAppContext } from "./context/AppContext";
import Navbar from './layout/Navbar.jsx'
import HotelReg from "./component/HotelReg.jsx";

function App() {

    const isOwnerPath = useLocation().pathname.includes("owner");
    const {showHotelReg} = useAppContext()

  return (
    <div>
        <Toaster/>
        {!isOwnerPath && <Navbar/> }
        {showHotelReg && <HotelReg/>}
        <div className="min-h-[70vh]">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/rooms" element={<AllRooms />} />
            <Route path="/about" element={<About />} />
            <Route path="/exprience" element={<Exprience />} />
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/my-bookings" element={<MyBooking />} />
            <Route path="/owner" element={<LayOut />}>
              <Route index element={<Dashboard />} />
              <Route path="add-room" element={<AddRoom />} />
              <Route path="list-room" element={<ListRoom />} />
            </Route>
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
