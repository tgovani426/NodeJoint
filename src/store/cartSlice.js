const { createSlice } = require("@reduxjs/toolkit")

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total_bill: 0
    },
    reducers: {
        add(state, action) {
            state.products.push(action.payload.product)
            state.total_bill += (action.payload.product.price)

        },
        remove(state, action) {
            return state.products.filter(item => item.id !== action.payload)
        }
    }
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer