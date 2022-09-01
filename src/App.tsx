import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";
import HomePage from "./Page/HomePage";
import { Routes, Route } from "react-router-dom";
import CommericalPage from "./Page/CommericalPage";
import FlimPage from "./Page/FlimPage";
import WorkerPage from "./Page/WorkerPage";
import AboutPage from "./Page/AboutPage";
import ContactPage from "./Page/ContactPage";


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commerical" element={<CommericalPage />} />
        <Route path="/flim" element={<FlimPage />} />
        <Route path="/worker" element={<WorkerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
