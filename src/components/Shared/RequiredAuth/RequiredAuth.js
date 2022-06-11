import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const RequiredAuth = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
    // console.log(location);
    return (
        user.displayName ? children : (
            <Navigate
                to={{ pathname: "/my-account" }}
                state={{ from: location }}
                replace
            />
        )
    );
};

export default RequiredAuth;