
import Navbar from './Components/Navbar'
import './App.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import TestimonialPage from './Components/Testimonial'
import ContactUs from './Components/Contactus';
import Aboutus from './Components/Aboutus';
import Pricing from './Components/Pricing';
import Hero from './Components/Hero';
import Secondpage from './Components/Secondpage';
import Footer from './Components/Footer';
import Thirdpage from './Components/Thirdpage';
import Aboutfull from './Components/Aboutfull';


function App() {
const router = createBrowserRouter ([
  {
    path: "/",
  element: 
    <>
      <Navbar/>
    <Hero/>
    <Secondpage/>
    <TestimonialPage/>
    <Thirdpage/>
    <Footer/>
     
    </>
  },
  
  {
    path:"/pricing",
    element: <> <Navbar/><Pricing/><Footer/></>
  },
  {
    path:"/aboutus",
    element: <><Navbar/> <Aboutfull/><Footer/></>
  },
  {
    path:"/contactus",
    element: <> <Navbar/><ContactUs/><Footer/></>
  }
  
]
)

  return (
    <>
    
    <RouterProvider router={router} />
    </>
  )
}

export default App
