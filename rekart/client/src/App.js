import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from './pages/Home'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'
import Announcement from "./components/LandingPage/Announcement";
import Footer from "./components/LandingPage/Footer";
import Navbar from "./components/LandingPage/Navbar";
import Feedback from "./pages/Feedback";
import Policy from './pages/Policy';
import Recycle from "./pages/Recycle"
import Reuse from "./pages/Reuse";
import Repurpose from "./pages/Repurpose";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart";
import Upload from "./pages/Upload";

function App() {

  return (
    <div className="App">
      <Announcement />
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/recycle" element={<Recycle />} />
          <Route path="/reuse" element={<Reuse />} />
          <Route path="/repurpose" element={<Repurpose />} />
          <Route path="/product" element={<Product />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
