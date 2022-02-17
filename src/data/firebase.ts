import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

/*
.env
REACT_APP_FIREBASE_API_KEY=""
REACT_APP_FIREBASE_AUTH_DOMAIN=""
REACT_APP_FIREBASE_PROJECT_ID=""
REACT_APP_FIREBASE_STORAGE_BUCKET=""
REACT_APP_FIREBASE_SENDER_ID=""
REACT_APP_FIREBASE_APP_ID=""
*/

// инициализируем firebase
export const firebase_app = initializeApp(firebaseConfig);

// https://firebaseopensource.com/projects/csfrequency/react-firebase-hooks/
// https://github.com/csfrequency/react-firebase-hooks/tree/master/auth
// https://blog.logrocket.com/user-authentication-firebase-react-apps/

// аутификация
export const auth = getAuth(firebase_app);

export const login = (email: string, password: string): Promise<any> => {
    return signInWithEmailAndPassword(auth, email, password);
};
export const logout = (): Promise<any> => {
    return signOut(auth);
};
