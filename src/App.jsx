import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ProductsPage from "./components/Products";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar className=" " />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
