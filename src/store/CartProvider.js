import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {

    }

    return defaultCartState
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFormCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFormCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;