import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

export const UserContext = createContext(null);

// @ts-ignore
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Use the UID to fetch the user's profile data
        const userRef = ref(db, 'users/' + firebaseUser.uid);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          setUser({
            // @ts-ignore
            username: data.username, // Assuming you've stored it under 'username' key
            email: firebaseUser.email,
          });
        }, {
          onlyOnce: true // Fetch data only once, not continuously
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
