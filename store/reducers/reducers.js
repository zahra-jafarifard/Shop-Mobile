const initialState = {
    token: '',
    userId: '',
    email: '',
    error: '',
    expireTime: '',
    favoriteProducts: [],
};

const shopReducer = (state = initialState, action) => {
    // console.log(state)
    switch (action.type) {
        case 'ADD-TO-FAVORITE':
            const favArray = [...state.favoriteProducts];
            const findFav = favArray.find(item => item === action.id)
            if (findFav === undefined) {
                favArray.push(action.id)
            }
            // console.log('favarry reducer', favArray)
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
                email: action.email,
                userId: action.userId

            };
        case 'LOGIN_FAILED':
            return {
                ...state,
                error: action.error
            };
        case 'LOGOUT':
            return {
                userId: '',
                email: '',
                token: '',
                expireTime: '',
                error: '',
            };

        default:
            return state;
    }
};

export default shopReducer;
