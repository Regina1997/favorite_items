import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorite from './Pages/Favorites';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Ingredients from './Pages/Ingredients';
import StyledInput from './Pages/Input';
import useWindowSize from './components/CustomHooks/Reseize/useWindowSize';
import { useDispatch } from 'react-redux';
import { setScreen } from './Pages/screenSlice';

function App() {
  const screen = useWindowSize();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setScreen(screen));
  }, [screen])

  return (
      <Router>
        <Header />
        <StyledInput /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>  
      </Router>
  );
}

export default App;
