import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Routes >
          <Route path='/' element={<Main />} />
          <Route path='/product/:productId/:name' element={<Product />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
