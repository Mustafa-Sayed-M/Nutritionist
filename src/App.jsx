import { Route, Routes } from "react-router-dom";

// Pages:
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/NotFoundPage";
import AboutPage from "@pages/AboutPage";
import TeamPage from "@pages/TeamPage";
import ProcessPage from "@pages/ProcessPage";
import PricingPage from "@pages/PricingPage";
import BlogsPage from "@pages/BlogsPage";
import ContactPage from "@pages/ContactPage";
// Components:
import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";

function App() {
  return (
    <div className="App text-grey-15">
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;