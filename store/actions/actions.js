import { REACT_APP_API_ADDRESS } from '@env';

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
export const loginRequest = (mobile, token, clientId ) => {
    return {
        type: 'LOGIN',
        mobile: mobile,
        token: token,
        clientId: clientId,
        // expirationTime: expTime,
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
                        console.log('err ' , res.message)
                        return dispatch(loginFailed(res.message));
                    });
                }
                else {
                    return response.json();
                }
            })
            .then((res) => {

                // const expirationTime = new Date(new Date().getTime() + 3600000);
                // console.log(res)
                // localStorage.setItem(
                //     'userData',
                //     JSON.stringify({
                //         userId: res.userId,
                //         token: res.token,
                //     })
                // );
                // localStorage.setItem(
                //     'expiresIn',
                //     JSON.stringify({
                //         expiresIn: expirationTime,
                //     })
                // );

                dispatch(loginRequest(res.mobile, res.token, res.clientId));
                // dispatch(loginRequest(res.mobile, res.token, res.ClientId, expirationTime));
                // dispatch(checkAuthTimeout(expirationTime));
            })
            .catch((e) => {
                console.log(e);
            });
    };
};

export const Logout = () => {
    // localStorage.removeItem("userData");
    // localStorage.removeItem("expiresIn");
    return {
        type: 'LOGOUT',
    };
};




// export const authCheckState = () => {
//     return (dispatch) => {
//         const userData = JSON.parse(localStorage.getItem("userData"));
//         if (userData) {
//             const token = userData.token;
//             if (!token) {
//                 console.log("userDataLOcal toooooken redux", token);
//                 dispatch(Logout());
//             } else {
//                 const expirationTime = JSON.parse(localStorage.getItem("expiresIn"));
//                 if (new Date(expirationTime.expiresIn) <= new Date()) {
//                     dispatch(Logout());
//                 } else {
//                     const remainingTime = parseInt(
//                         (new Date(expirationTime.expiresIn).getTime() -
//                             new Date().getTime()) /
//                         1000
//                     );
//                     // console.log("remainingTime", remainingTime);
//                     dispatch(loginRequest(userData.email, userData.token, userData.userId, remainingTime));
//                     dispatch(checkAuthTimeout(remainingTime));
//                 }
//             }
//         }
//     };
// };

export const checkAuthTimeout = (expTime) => {
    return (dispatch) => {
        // console.log('checkAuthTimeout', expTime)
        setTimeout(() => {
            // dispatch(Logout());
        }, expTime * 1000);
    };
};