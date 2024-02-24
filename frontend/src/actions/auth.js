import axios from 'axios'

import {
    LOGIN_SUCCESS ,
    LOGIN_FAIL ,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT,
   
   } from './types'
   

 // ...
 export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }; 

        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }

    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);
        console.log('Login Success:', res.data); 
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data // Am corectat aici de la PAYLOAD la payload
        });
        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }
}

// ...

export const load_user = () => async dispatch => {
    if(localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };
    


        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config);

            dispatch({
                type: USER_LOADED_SUCCESS,
                 payload: {
                    id: res.data.id,
                    email: res.data.email,
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                },
            });
        } catch (err) {
            console.error('Error loading user:', err);
            dispatch({
                type: USER_LOADED_FAIL,
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};


export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
};