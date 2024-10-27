import React from "react";
import { Route, Routes } from "react-router-dom";

// Components:
import Header from "./Components/Global/Header/Header";
import Footer from "./Components/Global/Footer/Footer";

// Pages:
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Process from './Pages/Process';
import Blog from './Pages/Blog';
import Pricing from './Pages/Pricing';
import Contact from "./Pages/Contact";
import BlogDetail from "./Pages/BlogDetail";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team/*" element={<Team />} />
        <Route path="/process" element={<Process />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/blog/detail/:blogId" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
