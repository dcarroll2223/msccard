import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { products } from './data';

//added routing, toast for the add to cart message

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" limit={1} />
      <div>
        <Navbar data={products} />
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
