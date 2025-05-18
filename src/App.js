import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Components/Navbar";
import Home from "./Page/Home";
import Footer from "./Components/Footer/Footer";
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/layout/Layout";
import Contact from "./Page/Contact";
import Services from "./Page/Services";
import ServicesDetails from "./Page/ServicesDetails";
import AboutUS from "./Components/AboutUs";
import Login from "./Components/Login/Login";

const routes = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route index element={<Home></Home>} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/contact" element={<Contact></Contact>} />
      <Route path="/Contactus" element={<Contact></Contact>} />
      <Route path="/services" element={<Services></Services>} />
      <Route path="/aboutus" element={<AboutUS></AboutUS>} />
      <Route path="/login" element={<Login></Login>} />
      <Route
        path="/ServiceDetails"
        element={<ServicesDetails></ServicesDetails>}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={routes}> </RouterProvider>
    </>
  );
}

export default App;
