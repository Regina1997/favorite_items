import React, { useEffect } from 'react';
import Card from '../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from './itemSlice';
import { Popup } from '../components/Popup/Popup';

function Favorite() {    
    const favorites = useSelector(state => state.items.favorites);
    console.log(favorites)
    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(setFavorites())
    }, [dispatch]);
    
    return (
        <div className='app'>
          {favorites!== [] ? favorites.map(item => <Card key={item.id} {...item}/>) : <p>The list is empty</p>}
          {<Popup title={"Hello there!"}/>}
        </div>
    ); 
  
  }
  export default Favorite;
