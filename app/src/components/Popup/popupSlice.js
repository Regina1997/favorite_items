import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        text: '',
        visible: false
    },
    reducers: {
        showPopup(state, action) {            
            state.visible = true;
            state.text = action.payload.cardTitle;
        },
        hidePopup(state) {            
            state.visible = false;
            state.text = '';
        }
    }
});

export const { showPopup, hidePopup } = popupSlice.actions;

export default popupSlice.reducer;