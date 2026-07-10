 import { createSlice } from '@reduxjs/toolkit';
 import { uiActions } from './ui-slice';

 
 const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
     addItemToCart(state, action) {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);
        state.totalQuantity++;

        if(!existingItem) {
            state.items.push({
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                title: newItem.title
            });
        }else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        }
     },
     removeItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);
        if(!existingItem) return;
        state.totalQuantity--;
        if(existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        }else {
            existingItem.quantity--;
        }
        }
    }
});


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
            title: 'Sending...',
            message: 'Sending cart data!',
            status: 'pending'
          }));
          
    };
};

const sendRequest = async () => {
    const response = await fetch('https://react-http-57487-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      const responseData = await response.json();
    
      if(!response.ok){
        dispatch(uiActions.showNotification({
          title: 'Error!',
          message: 'Sending cart data failed!',
          status: 'error'
        }
    ));
        
}
  
try {
    await sendRequest(cart);

    dispatch(uiActions.showNotification({
        title: 'Success!',
        message: 'Sent cart data successfully!',
        status: 'success'
      }));

} catch (error) {
    dispatch(uiActions.showNotification({
        title: 'Error!',
        message: 'Sending cart data failed!',
        status: 'error'
      }));
}

  
 

  }

export const cartActions = cartSlice.actions;  
export default cartSlice;