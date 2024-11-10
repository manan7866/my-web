
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//     apiKey: "AIzaSyDjn2Z3W2lc1F_i3S4sbfugAiQwVATiZdA",
//     authDomain: "build-cv-ddea1.firebaseapp.com",
//     projectId: "build-cv-ddea1",
//     storageBucket: "build-cv-ddea1.appspot.com",
//     messagingSenderId: "587898204429",
//     appId: "1:587898204429:web:7aa7e2cdf443afb3538044",
//     measurementId: "G-995NKP5HEF"
//   };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const storage = getStorage(app); // Initialize Firebase Storage

// export { analytics, storage };
// firebase.tsx
// import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// import React, { useEffect, useState, ReactNode } from 'react';

// const firebaseConfig = {
//     apiKey: "AIzaSyDjn2Z3W2lc1F_i3S4sbfugAiQwVATiZdA",
//     authDomain: "build-cv-ddea1.firebaseapp.com",
//     projectId: "build-cv-ddea1",
//     storageBucket: "build-cv-ddea1.appspot.com",
//     messagingSenderId: "587898204429",
//     appId: "1:587898204429:web:7aa7e2cdf443afb3538044",
//     measurementId: "G-995NKP5HEF"
// };

// let analytics;
// let storage;

// const app = initializeApp(firebaseConfig);


// interface FirebaseProviderProps {
//     children: ReactNode; // children prop کو declare کریں
// }

// const FirebaseProvider: React.FC<FirebaseProviderProps> = ({ children }) => {
//     const [isInitialized, setIsInitialized] = useState(false);

//     useEffect(() => {
//         const initFirebase = async () => {
//             if (typeof window !== 'undefined') {
//                 const supported = await isSupported();
//                 if (supported) {
//                     analytics = getAnalytics(app);
//                 }
//                 storage = getStorage(app); // Initialize Firebase Storage
//                 setIsInitialized(true);
//             }
//         };

//         initFirebase();
//     }, []);

//     return (
//         <div>
//             {isInitialized ? children : 'Initializing Firebase...'}
//         </div>
//     );
// };

// export { analytics, storage, FirebaseProvider };
"use client"
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage,  } from "firebase/storage"; // Import only getStorage
import React, { useEffect, useState, ReactNode } from 'react';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjn2Z3W2lc1F_i3S4sbfugAiQwVATiZdA",
    authDomain: "build-cv-ddea1.firebaseapp.com",
    projectId: "build-cv-ddea1",
    storageBucket: "build-cv-ddea1.appspot.com",
    messagingSenderId: "587898204429",
    appId: "1:587898204429:web:7aa7e2cdf443afb3538044",
    measurementId: "G-995NKP5HEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize analytics and storage
let analytics: any;
const storage = getStorage(app); // Directly initialize storage

// Define FirebaseProvider component
interface FirebaseProviderProps {
    children: ReactNode; // Declare children prop
}

const FirebaseProvider: React.FC<FirebaseProviderProps> = ({ children }) => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initFirebase = async () => {
            if (typeof window !== 'undefined') {
                const supported = await isSupported();
                if (supported) {
                    analytics = getAnalytics(app);
                }
                setIsInitialized(true);
            }
        };

        initFirebase();
    }, []);

    return (
        <div>
            {isInitialized ? children : 'Initializing Firebase...'}
        </div>
    );
};

// Export analytics and storage
export { analytics, storage, FirebaseProvider };
