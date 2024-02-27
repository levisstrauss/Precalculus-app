import React, { useState, useEffect } from "react";
import Styled from "styled-components/native";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const Avatar = () => {
  const [photo, setPhoto] = useState("https://cl.ly/55da82beb939/download/avatar-default.jpg"); // Default avatar image

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

  return <Image source={{ uri: photo }} />;
};

export default Avatar;

const Image = Styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
