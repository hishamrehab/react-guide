import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";


export const initialState = { counter: 0 , showCounter: true };

 const counterSlice =  createSlice({
     name: "counter",
     initialState: initialState,
     reducers: {
        increment(state , action){
            state.counter++;
        },
        decrement(state , action){
            state.counter--;
        },
        increase(state, action){
            state.counter += action.amount;
        },
        toggleCounter(state , action){
            state.showCounter = !state.showCounter;
        }
     } 
 });




const store = createStore(counterReducer);

export default store;