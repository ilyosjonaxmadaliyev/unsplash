import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PhotoInfo from "./pages/PhotoInfo"

function App() {
  return (
    <>
      <Navbar />
      <div className="align-elements py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photoinfo/:id" element={<PhotoInfo />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
