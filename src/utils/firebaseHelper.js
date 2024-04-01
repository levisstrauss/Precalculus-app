import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg9evCOPYTi3UNIO5131zZp98pZBHoe_I",
  authDomain: "authfirebasereactnatives.firebaseapp.com",
  projectId: "authfirebasereactnatives",
  storageBucket: "authfirebasereactnatives.appspot.com",
  messagingSenderId: "208497038411",
  appId: "1:208497038411:web:528d03424fa081f72929ce",
  measurementId: "G-CC83YNZEEC"
};

export const getFirebaseApp = () => {
  // Check if any Firebase app instances have already been initialized
  if (!getApps().length) {
    // Initialize a new Firebase app instance if none exist
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Auth with React Native persistence
    initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
    return app;
  } else {
    // Return the existing Firebase app instance if already initialized
    return getApp();
  }
};
