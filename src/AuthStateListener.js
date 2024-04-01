// AuthStateListener.js
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

const AuthStateListener = ({ children }) => {
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);
        onValue(userRef, snapshot => {
          const userData = snapshot.val();
          // Here, you can do something with the userData
          // For example, update context or state with the fetched user data
        });
      } else {
        // User is signed out
        // Handle redirection or state cleanup
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return children;
};

export default AuthStateListener;
