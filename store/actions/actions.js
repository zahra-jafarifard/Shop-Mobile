import { REACT_APP_API_ADDRESS } from '@env';
import { addToClientSQLite } from '../../dbSQLite/db';

export const addToFavorites = (id) => {
    return {
        type: 'ADD-TO-FAVORITE',
        id: id
    };
};
export const removeFromFavorites = (id) => {
    return {
        type: 'REMOVE-FROM-FAVORITE',
        id: id
    };
};
export const loginRequest = (mobile, token, clientId) => {
    return {
        type: 'LOGIN',
        mobile: mobile,
        token: token,
        clientId: clientId,
    };
};



export const loginFailed = (err) => {
    return {
        type: 'LOGIN_FAILED',
        error: err,
    };
};



export const login = (mobile, password) => {
    return (dispatch) => {
        return fetch(`${REACT_APP_API_ADDRESS}/clients/signIn`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: mobile,
                password: password,
            }),
        })
            .then((response) => {
                if (response.status === 422 || response.status === 403 || (!response.ok)) {
                    return response.json().then((res) => {
                        console.log('err ', res.message);
                        return dispatch(loginFailed(res.message));

                    });
                }
                else {
                    return response.json();
                }
            })
            .then((res) => {

                

                addToClientSQLite(res.clientId, res.mobile, res.token);
                dispatch(loginRequest(res.mobile, res.token, res.clientId));
            })
            .catch((e) => {
                console.log(e);
            });
    };
};

export const Logout = () => {
    return {
        type: 'LOGOUT',
    };
};

export const logoutRequest = () => {
    return (dispatch) => {
        // .deleteItemAsync('clientData')
        //     .then(() => {
        //         console.log('storage deleted...')
        //         //deleteClientSQLite();
        //     })
        //     .catch(err => console.log(err));
        
            dispatch(Logout());
    };
};



