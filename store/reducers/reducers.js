const initialState = {
    token: '',
    clientId: '',
    mobile: '',
    error: false,
    // expireTime: '',
    favoriteProducts: [],
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TO-FAVORITE':
            const favArray = [...state.favoriteProducts];
            const findFav = favArray.find(item => item === action.id)
            if (findFav === undefined) {
                favArray.push(action.id)
            }
            return {
                ...state,
                favoriteProducts: favArray
            };
        case 'REMOVE-FROM-FAVORITE':
            const favArr = [...state.favoriteProducts];
            return {
                ...state,
                favoriteProducts: favArr.filter(item => item !== action.id)

            };

        case 'LOGIN':
            return {
                ...state,
                token: action.token,
                mobile: action.mobile,
                clientId: action.clientId

            };
        case 'LOGIN_FAILED':
            return {
                ...state,
                error: action.error
            };
        case 'LOGOUT':
            return {
                clientId: '',
                mobile: '',
                token: '',
                error: '',
            };

        default:
            return state;
    }
};

export default shopReducer;
