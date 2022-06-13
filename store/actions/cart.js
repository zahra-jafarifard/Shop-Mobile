export const addToCart = (id, price) => {
    // console.log('actipn id' , id)
    return {
        type: 'ADD-TO-CART',
        id: id,
        price: price
    };
};

export const removeFromCart = (id, price) => {
    // console.log('removeFromCart actipn id' , id)
    return {
        type: 'REMOVE-FROM-CART',
        id: id,
        price: price

    };
};