import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";

const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Newsletter = React.lazy(() => import('./pages/Newsletter'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Appbar />
        <main className="flex-1">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
