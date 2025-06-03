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
