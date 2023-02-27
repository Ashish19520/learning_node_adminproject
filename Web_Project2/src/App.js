import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import UpdateProducts from './components/UpdateProducts';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Products/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/update/:id" element={<UpdateProducts/>} />
        </Route>
        <Route path="/sign" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
