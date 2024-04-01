import React, { useState, useEffect } from "react";
import Styled from "styled-components/native";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

/**
 * `Avatar` is a React functional component that renders the user's profile image.
 * The profile image is fetched from the database and displayed as a circular image.
 *
 * @returns The JSX elements to render the user's profile image.
 */
const Avatar = () => {
  const [photo, setPhoto] = useState(); // Default avatar image

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const db = getDatabase();
      const userRef = ref(db, `users/${user.uid}/profileImageUrl`);

      const unsubscribe = onValue(userRef, (snapshot) => {
        const profileImageUrl = snapshot.val();
        if (profileImageUrl) {
          setPhoto(profileImageUrl);
        }
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }
  }, []);

  return <Image source={{ uri: photo}} />;
};

export default Avatar;

const Image = Styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
