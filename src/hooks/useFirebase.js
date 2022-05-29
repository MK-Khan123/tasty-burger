import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged,
    GithubAuthProvider
} from "firebase/auth";
import { useEffect, useState } from "react";
import sweetAlert from "../components/Shared/SweetAlert/SweetAlert";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const registerUsingEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                sweetAlert('Successfully Registered!', 'success', 'Please login using your email and password');
            })
            .catch((error) => {
                const errorMessage = error.message;
                sweetAlert('Registration Failed!', 'error', errorMessage);
                setError(errorMessage);
            });
    }

    const signInUsingEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                sweetAlert('Successfully Logged In!', 'success');
            })
            .catch((error) => {
                const errorMessage = error.message;
                sweetAlert('Login Failed', 'error', errorMessage);
                setError(errorMessage);
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
            sweetAlert('Logged out successfully!', 'success');
        }).catch((error) => {
            alert(error);
        });
    }

    const signInUsingGoogle = () => {

        const googleAuthProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                sweetAlert('Successfully Signed In!', 'success');
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                sweetAlert('Login Failed', 'error', errorMessage);
                setError(errorMessage);
            });
    }

    const signInUsingGithub = () => {

        const githubAuthProvider = new GithubAuthProvider();

        signInWithPopup(auth, githubAuthProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                sweetAlert('Successfully Signed In!', 'success');
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                sweetAlert('Login Failed', 'error', errorMessage);
                setError(errorMessage);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User                
                console.log('onAuthStateChanged', user);
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [auth]);

    return {
        user,
        error,
        logout,
        signInUsingGoogle,
        signInUsingGithub,
        registerUsingEmail,
        signInUsingEmail
    };
};

export default useFirebase;

