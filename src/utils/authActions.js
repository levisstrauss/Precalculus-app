import {getFirebaseApp} from "./firebaseHelper";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from "firebase/auth";
import {child, getDatabase, set, ref } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { result } from "validate.js";
import { authenticate } from "../store/authSlice";

export const signUp = (username, email, password) => {
  return async (dispatch) => {
    const app = getFirebaseApp();
    const auth = getAuth(app);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(result);

      const {uid, ststTokenManager } = result.user;
      const { accessToken, expirationTime} = ststTokenManager;
      const expiryDate = new Date(expirationTime);

      const userData = await createUser(username, email, uid);

      dispatch(authenticate({token: accessToken, userData}));

      //Save user data and token to local storage
      saveToDataStorage(accessToken, uid, expiryDate);
    } catch (error) {
        console.log(error);
        const errorCode = error.code;
        let message = "Something went wrong";

        if(errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
          message = "Wrong email or password";
        }

        throw new Error(message);
    }
  }
}

const createUser = async (username, email, userId) => {
  const userData = {
    username,
    email,
    userId,
    signUpDate: new Date().toISOString()
  }

  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `users/${userId}`);
  await set(childRef, userData);
  return userData;
}

const saveToDataStorage = (token, userId, expiryDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token,
      userId,
      expiryDate: expiryDate.toISOString()
    })
  );
}
