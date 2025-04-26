import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
}from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import About from "./pages/About";
import Exprience from "./pages/Exprience";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element = {<Main/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/hotel" element = {<Hotel/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/exprience" element = {<Exprience/>}/>
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
