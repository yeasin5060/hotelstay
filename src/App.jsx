import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
}from "react-router-dom";

      // all pages import heare
import Main from "./layout/Main";
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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element = {<Main/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/rooms" element = {<AllRooms/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/exprience" element = {<Exprience/>}/>
          <Route path="/rooms/:id" element = {<RoomDetail/>}/>
          <Route path="/my-bookings" element = {<MyBooking/>}/>
          <Route path="/owner" element = {<LayOut/>}>
              <Route index element = {<Dashboard/>}/>
              <Route path="add-room" element = {<AddRoom/>}/>
              <Route path="list-room" element = {<ListRoom/>}/>
          </Route>
        </Route>

      </Route>
    )
  )
  return (
    <RouterProvider
    router={router}
   />
  )
}

export default App
