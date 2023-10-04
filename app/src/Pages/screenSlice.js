import { createSlice } from '@reduxjs/toolkit';

const screenSlice = createSlice({
    name: 'screen',
    initialState: {
        screen: ''
    },
    reducers: {
        setScreen(status, action){
            status.screen = action.payload;
        }
    }
});

export const { setScreen } = screenSlice.actions;

export default screenSlice.reducer;