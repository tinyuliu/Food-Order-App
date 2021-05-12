import CartContext from './cart-context';

const CartProvider = props => {
    const addItemToCartHandler = item => {};

    const removeItemFormCartHandler = id => {};
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFormCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;