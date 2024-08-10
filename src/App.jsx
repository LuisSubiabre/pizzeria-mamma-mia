import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyNavbar from "./components/Navbar";
import Home from './components/Home';
import Footer from './components/Footer';
import './style.css';
import Register from './components/Register';



function App() {

  return (
    <>
      <MyNavbar />
      {/* <Home /> */}
      <Register />
      <Footer />

    </>
  )
}

export default App
