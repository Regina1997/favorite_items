import { createSlice } from '@reduxjs/toolkit';

const pagesSlice = createSlice({
    name: 'pages',
    initialState: {
        pageNumber: 1, 
        query: '',
        limit: 9
    },
    reducers: {
        setQuery(status, actions){
            status.query = actions.payload.query;
        },
        setPageNumber(status, actions){
            status.pageNumber = actions.payload.pageNumber;
        }, 
        setLimit(status, actions){
            status.limit = actions.payload.limit;
        }
    }
});

export const { setQuery, setPageNumber, setLimit } = pagesSlice.actions;

export default pagesSlice.reducer;