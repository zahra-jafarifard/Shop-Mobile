export const addToCart = (id, price) => {

    return {
        type: 'ADD-TO-CART',
        id: id,
        price: price
    };
    
};

export const removeFromCart = (id, price) => {
    return {
        type: 'REMOVE-FROM-CART',
        id: id,
        price: price

    };
};