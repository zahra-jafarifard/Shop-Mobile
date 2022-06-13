const initialState = {
    totalAmount: 0,
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    //console.log('state reducer', state)

    let _cartItem = [];
    _cartItem = [...state.cartItems];
    let _item;
    let _total = state.totalAmount;
    _item = _cartItem.find(item => {
        return item.id === action.id
    })
    switch (action.type) {
        case 'ADD-TO-CART':
            if (_item === undefined) {
                _item = {
                    id: action.id,
                    count: 1,
                }
                _cartItem.push(_item)
                _total = _total + action.price;
            }
            else {
                const count = _item.count;
                const index = _cartItem.indexOf(_item);
                _total = _total + action.price
                if (index > -1) {
                    _cartItem.splice(index, 1);
                }
                _item = {
                    id: action.id,
                    count: count + 1,

                }
                _cartItem.push(_item)
            }
            return {
                ...state,
                cartItems: _cartItem,
                totalAmount: _total
            };
        case 'REMOVE-FROM-CART':
            let count = _item.count;
            const index = _cartItem.indexOf(_item);
            _total = _total - action.price;

            if (index > -1) {
                _cartItem.splice(index, 1);
            }
            _item = {
                id: action.id,
                count: (count - 1) > 0 ? count - 1 : 0,
            }
            if (_item.count !== 0) {
                _cartItem.push(_item)
            }

            return {
                ...state,
                cartItems: _cartItem,
                totalAmount: _total

            };


        default:
            return state;
    }
};

export default cartReducer;
