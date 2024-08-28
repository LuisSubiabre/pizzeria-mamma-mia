import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyNavbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';
import './style.css';
import Register from './pages/Register';
import Login from './pages/Login';
import { Card } from 'react-bootstrap';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>



      <Footer />

    </>
  )
}

export default App
