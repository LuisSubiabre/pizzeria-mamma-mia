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
import Profile from './pages/Profile';
import CartProvider from './context/CartContext';
import { UserContext } from "./context/UserContext";
import { useContext } from 'react';

function App() {
  const { auth } = useContext(UserContext);

  return (
    <div id="root">
      <CartProvider>
        <MyNavbar />
        <div className="main-content"> {/* Contenedor para el contenido principal */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={!auth ? <Register /> : <Profile />} />
            <Route path="/login" element={!auth ? <Login /> : <Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={auth ? <Profile /> : <Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;