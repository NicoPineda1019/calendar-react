import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {

        dispatch( {
            type: types.login,
            payload: {
                name: 'Nicolas Pineda Lopez'
            }
        })

        navigate('/marvel', {
            replace : true
        });

    }
    return (
        <div className="container mt-5">
            <h2>Login Screen</h2>
            <hr />
            <button 
                className="bnt btn-primary"
                onClick={ handleLogin }>
                    Login
            </button>
            
        </div>
    )
}
