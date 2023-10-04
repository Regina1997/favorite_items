import { createSlice } from '@reduxjs/toolkit';

export const getFavorites = () => {
  const values = [];
  for (let i = 0; i < localStorage.length; i++) {
        const value = localStorage.getItem(localStorage.key(i));
        
        if (value) {
          const parsedValue = JSON.parse(value);  
          values.push(parsedValue); 
        }
    }
  return values
}

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        favorites: []
    },
    reducers: {
        toggleFavorite(state, action) {  
            const itemId = action.payload.itemId;
            const isChecked = action.payload.isChecked;
            console.log(action)
            if (isChecked) {
              //state.favorites.push(itemId);
              const card = {
                id: action.payload.id,
                isChecked: isChecked,
                title: action.payload.cardTitle,
                image: action.payload.image,
              };
              state.favorites.push(card)
              localStorage.setItem(itemId,JSON.stringify(card));
            } else {
              state.favorites = state.favorites.filter((item) => item.id !== parseInt(itemId));
              localStorage.removeItem(itemId);
            }   
        },
        setFavorites(state){
          state.favorites = getFavorites();
        }
    }
});

export const { toggleFavorite, setFavorites } = itemSlice.actions;

export default itemSlice.reducer;