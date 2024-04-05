import React, { useEffect, useState } from "react";
import styled from 'styled-components/native';
import { Asset, launchImageLibrary } from "react-native-image-picker";
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, update} from 'firebase/database';
import CustomInput from "../../components/CustomInput";
import {useForm} from 'react-hook-form';
import {getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import Firebase storage

/**
 * `EditProfileScreen` is a React component allowing users to edit their profile information,
 * including username, city, state, bio, and profile picture. It integrates with Firebase to fetch
 * and update user data, and with `react-native-image-picker` for selecting a new profile image.
 *
 * @param {Object} props - The properties passed to the EditProfileScreen component.
 * @param {Object} props.navigation - The navigation prop used for navigating between screens.
 * @returns The JSX for the EditProfileScreen component.
 */
//@ts-ignore
const EditProfileScreen = ({navigation}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Asset>({ uri: "https://cl.ly/55da82beb939/download/avatar-default.jpg" });
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
  }, []);

  // Submit the data to the server
  // @ts-ignore
  const onSubmit = async (data) => {
    if (!selectedPhoto?.uri) {
      console.error('No profile image selected');
      // Handle the case where no photo is selected appropriately
      return;
    }
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

  // Function to save a record in Firebase Realtime Database after image upload
  async function saveRecord(userId: string, uri: string) {
    const db = getDatabase();
    // Reference to the specific user's record
    const userRef = ref(db, `users/${userId}`);
    try {
      // Update the specific fields in the user's record without overwriting the entire record
      await update(userRef, {
        profileImageUrl: uri,
      });
      console.log('User record updated successfully with new image URL.');
    } catch (error) {
      console.error('Error updating user record in database: ', error);
    }
  }

  /**
   * Uploads an image to Firebase Storage and updates the user's profile image URL in the database.
   * It takes a URI (which can be a string, URL object, or Request object) as input, converts it to a blob,
   * and uploads it to a predefined path in Firebase Storage. Upon successful upload, it retrieves the
   * download URL of the uploaded image and updates the user's profile record in Firebase Realtime Database.
   *
   * @param {string|URL|Request|undefined} uri - The URI of the image to be uploaded. It Can be a string URL, a URL object, or a Request object.
   * @returns {Promise<void>} A promise that resolves when the image upload and user record update are complete.
   */
  const uploadImage = async (uri: string | URL | Request | undefined): Promise<void> => {
    const response = await fetch(uri as Request | string);
    const blob = await response.blob();
    const storage = getStorage(); // Initialize Firebase Storage
    const ref = storageRef(storage, "images/" + new Date().getTime()); // Create a reference to 'images/{timestamp}'
    const uploadTask = uploadBytesResumable(ref, blob);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, (error) => {
      // Handle unsuccessful uploads
      console.error('Upload failed', error);
    }, () => {
      // Handle successful uploads on complete
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        console.log('File available at', downloadURL);
        const userId = getAuth().currentUser?.uid;
        if (userId){
          await saveRecord(userId, downloadURL);
        }else {
          console.error("User ID is undefined. Cannot update user record.");
        }
      }).catch((error) => {
        console.error('Error getting download URL:', error);
      });
    });
  };

  /**
   * Opens the device's image library for the user to select a photo. Once a photo is selected,
   * it updates the component's state with the new photo and uploads the selected photo to Firebase Storage.
   * This function is triggered when the user wants to change their profile photo.
   *
   * Use `launchImageLibrary` from `react-native-image-picker` to open the image library.
   * If a photo is selected and no errors occur, it updates the state with the new photo
   * and calls `uploadImage` to upload the photo to Firebase Storage.
   *
   * @returns {Promise<void>} A promise that resolves when the photo selection and optional upload are complete.
   */
  const onChangePhoto = async (): Promise<void> => {
    await launchImageLibrary({ mediaType: 'photo' },
      ({ didCancel, errorCode, errorMessage, assets }) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
          uploadImage(assets[0].uri);
        }
      });
  }

  return (
    <Container>
      <ProfileImage source={{ uri: selectedPhoto?.uri }} />
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
      <TextButton onPress={handleSubmit(onSubmit)}>Save</TextButton>
    </Container>
  );
};

export default EditProfileScreen;

//Stylesheet
// @ts-ignore
const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;
// @ts-ignore
const ProfileImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  aspect-ratio: 1;
  margin-bottom: 10px;
`;

// @ts-ignore
const Text = styled.Text`
  font-size: 15px;
  color: #1a9be0;
  margin-bottom: 30px;
`;

// @ts-ignore
const TextButton = styled.Text`
  font-size: 15px;
  color: #1a9be0;
`;

