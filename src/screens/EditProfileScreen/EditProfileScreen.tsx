import React, { useEffect, useState } from "react";
import Styled from 'styled-components';
import { Asset, launchImageLibrary } from "react-native-image-picker";
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import CustomInput from "../../components/CustomInput";
import {useForm} from 'react-hook-form';


//@ts-ignore
const EditProfileScreen = ({navigation}) => {

  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
  const {control, handleSubmit, setValue, formState: {errors}} = useForm();

  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();
    //@ts-ignore
    const userRef = ref(db, 'users/' + auth.currentUser.uid);

    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      // Set form default values
      setValue('username', userData.username);
      setValue('city', userData.city);
      setValue('states', userData.state);
      setValue('bio', userData.bio);
      setSelectedPhoto({ uri: userData.profileImageUrl });
    });

    // Cleanup subscription on unmount
    return () => {
      // Add any cleanup code here if needed
    };
  }, []);

  // Submit the data to the server
  // @ts-ignore
  const onSubmit = async (data) => {
    const auth = getAuth();
    const db = getDatabase();
    //@ts-ignore
    const userRef = ref(db, 'users/' + auth.currentUser.uid);

    // Update user data in Firebase
    update(userRef, {
      username: data.username,
      city: data.city,
      state: data.states,
      bio: data.bio,
      profileImageUrl: selectedPhoto?.uri,
    }).then(() => {
      console.log('Profile updated successfully');
      navigation.navigate('Profile');
    }).catch((error) => {
      console.error('Error updating profile: ', error);
    });
  };

  console.log("errors", errors);
  const onChangePhoto = () => {
    launchImageLibrary({mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if(!didCancel && !errorCode && assets && assets.length > 0){
          setSelectedPhoto(assets[0]);
        }
    });
  }
  return (
    <Container>
      <ProfileImage source={{ uri: selectedPhoto?.uri || 'https://cl.ly/55da82beb939/download/avatar-default.jpg' }} />
      <Text onPress={onChangePhoto}>Change profile photo</Text>

      <CustomInput
        name="username"
        // @ts-ignore
        control={control}
        rules={{
          required: "Username is required", minLength: {value: 3, message: "Should be more than 6 characters"}
      }}
        label="Username"
      />
      <CustomInput
        name="city"
        // @ts-ignore
        control={control}
        rules={{required: "City is required"}}
        label="City"
      />
      <CustomInput
        name="states"
        // @ts-ignore
        control={control}
        rules={{required: "States is required"}}
        label="States"
      />
      <CustomInput
        name="bio"
        // @ts-ignore
        control={control}
        rules={{maxLength: {value: 200, message: "Should be less than 200 characters"}}}
        label="Bio"
        multiline
      />
      <TextButton onPress={handleSubmit(onSubmit)}>Submit</TextButton>
    </Container>
  );
};

export default EditProfileScreen;

// @ts-ignore
const Container = Styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;
// @ts-ignore
const ProfileImage = Styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  aspect-ratio: 1;
  margin-bottom: 10px;
`;

// @ts-ignore
const Text = Styled.Text`
  font-size: 15px;
  color: #1a9be0;
  margin-bottom: 30px;
`;

// @ts-ignore
const TextButton = Styled.Text`
  font-size: 15px;
  color: #1a9be0;
`;



