import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    filterValue: ""
};
export const filterSlice = createSlice({
name: 'filter',
initialState: initialState,
reducers: {
    setFilter: {
        reducer: (state, action) => {
            state.filterValue = action.payload;
        },
        prepare: filterValue => {
            return {payload: filterValue};
        },
    },
},
});
export const {setFilter}=filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilterValue = state => {
    return state.filter.filterValue;
}