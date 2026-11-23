import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';


const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
          const response =   fetch('https://react-http-57487-default-rtdb.firebaseio.com/cart.json')

           if(!response.ok) {
            throw new Error('Fetching cart data failed.');
           }

          const data = await response.json();
          return data;
        };
        
      try {
     const cartData =  await fetchCartData();
     dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity || 0
     }));


      } catch (error) {
       uiActions.showNotification({
        title: 'Error!',
        message: 'Fetching cart data failed!',
        status: 'error'
       });
      }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
            title: 'Sending...',
            message: 'Sending cart data!',
            status: 'pending'
          }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-57487-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            }); 

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }

            return response.json();
        };

        try {
            await sendRequest();

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
    };
};