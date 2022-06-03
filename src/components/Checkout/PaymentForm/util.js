/* eslint-disable no-console */
export const logEvent = (name) => (event) => {
    console.log(`[${name}]`, event);
};

export const Result = ({ children }) => <div className="result">{children}</div>;

export const ErrorResult = ({ children }) => (
    <div className="error">{children}</div>
);