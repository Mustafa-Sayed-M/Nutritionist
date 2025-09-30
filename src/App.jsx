import { Route, Routes } from "react-router-dom";

// Pages:
import HomePage from "@pages/main/HomePage";
import NotFoundPage from "@pages/other/NotFoundPage";
import AboutPage from "@pages/main/AboutPage";
import TeamPage from "@pages/main/TeamPage";
import ProcessPage from "@pages/main/ProcessPage";
import PricingPage from "@pages/main/PricingPage";
import BlogsPage from "@pages/main/BlogsPage";
import ContactPage from "@pages/main/ContactPage";
// Components:
import Header from "@components/layout_temp/Header";
import Footer from "@components/layout_temp/Footer";

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