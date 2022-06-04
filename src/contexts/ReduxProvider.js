import React, { createContext } from 'react';
import useRedux from '../hooks/useRedux';

export const ReduxContext = createContext();

const ReduxProvider = ({ children }) => {

    const context = useRedux();

    return (
        <ReduxContext.Provider value={context}>
            {children}
        </ReduxContext.Provider>
    );
};

export default ReduxProvider;