import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Result from "./Result";
import EvenOdd from "./EvenOdd";
import About from './About';
import Page404 from './Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <EvenOdd /> } />
        <Route path='/result' element = { <Result /> } />
        <Route path='/avout' element = { <About /> } />
        <Route path='*' element = { <Page404 /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
