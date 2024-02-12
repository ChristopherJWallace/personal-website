import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartCountState {
  value: number;
}

const initialState: CartCountState = {
  value: 0
};

const cartCountSlice = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    increment: (state) => {
      state.value +=1
    },
    decrement: (state) => {
      state.value -=1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// export const {increment, decrement, incrementByAmount} = cartCountSlice.actions;
// export default cartCountSlice.reducer;
// export type RootState = ReturnType<typeof cartCountSlice.getState>;