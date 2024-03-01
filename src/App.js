import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Home from "./Pages/Home";
// import Services from "./Pages/Services";
import Pages from "./Pages/Pages";
import Productcard from "./Components/Productcard";
import React, { Suspense } from "react";


// Lazily loaded components
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Services = React.lazy(() => import("./Pages/Services"));
const Contact = React.lazy(() => import("./Pages/Contact"));



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>}></Route>
          <Route path="/About" element={<><Header /><About /><Footer /></>}></Route>
          <Route path="/Contact" element={<><Header /><Contact /><Footer /></>}></Route>
          <Route path="/Services" element={<><Header /><Services /><Footer /></>}></Route>
          <Route path="/pages" element={<><Header /> <Suspense
            fallback={
              // Fallback UI while Product component is being loaded
              <>
                <div class="text-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </>
            }
          >
            {/* Render the Product component */}
            <Pages />
          </Suspense><Footer /></>}></Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
