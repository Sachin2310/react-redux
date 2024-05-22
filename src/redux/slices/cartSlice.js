import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const cartSelector = createSelector(
    (state) => state,
    (state) => state.cart
)

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;