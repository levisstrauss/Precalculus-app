import React, { useEffect, useState } from "react";
import Styled from 'styled-components';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, query, orderByChild, limitToLast } from 'firebase/database';

//@ts-ignore
const ProfileScreen = ({navigation}) => {

  const [userRank, setUserRank] = useState('Not in top 10');
  const [userData, setUserData] = useState({
    username: 'Anonymous',
    city: 'Unknown City',
    state: 'Unknown State',
    bio: 'No bio available.',
    profileImageUrl: 'https://cl.ly/55da82beb939/download/avatar-default.jpg', // Default Image
    points: 0,
    quizCompleted: 0,});

  // useEffect(() => {
  //   const auth = getAuth();
  //   const db = getDatabase();
  //   //@ts-ignore
  //   const userRef = ref(db, 'users/' + auth.currentUser.uid);
  //
  //
  //
  //   onValue(userRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setUserData({
  //       username: data.username || 'Anonymous',
  //       city: data.city || 'Unknown City',
  //       state: data.state || 'Unknown State',
  //       bio: data.bio || 'No bio available.',
  //       profileImageUrl: data.profileImageUrl || 'https://via.placeholder.com/50',
  //       points: data.points || 0,
  //       quizCompleted: data.quizCompleted || 0,
  //     });
  //   });
  //
  //   // Query the top 10 users
  //   const leaderboardRef = query(ref(db, 'users'), orderByChild('points'), limitToLast(10));
  //   onValue(leaderboardRef, (snapshot) => {
  //     let rank = 1;
  //     let found = false;
  //     snapshot.forEach((childSnapshot) => {
  //       // @ts-ignore
  //       if (childSnapshot.key === auth.currentUser.uid) {
  //         found = true;
  //         // @ts-ignore
  //         setUserRank(rank);
  //       }
  //       rank++;
  //     });
  //     if (!found) {
  //       setUserRank('invisible');
  //     }
  //   });
  //   // Cleanup subscription on unmount
  //   return () => {
  //     // Add any cleanup code here if needed
  //   };
  // }, []);

  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();
    const userId = auth.currentUser?.uid;

    if (!userId) {
      return;
    }

    const userRef = ref(db, 'users/' + userId);
    const unsubscribeUser = onValue(userRef, (snapshot) => {
      const data = snapshot.val() || {};
      setUserData({
        username: data.username || 'Anonymous',
        city: data.city || 'Unknown City',
        state: data.state || 'Unknown State',
        bio: data.bio || 'No bio available.',
        profileImageUrl: data.profileImageUrl || 'https://cl.ly/55da82beb939/download/avatar-default.jpg',
        points: data.points || 0,
        quizCompleted: data.quizCompleted || 0,
      });
    });

    const leaderboardRef = query(ref(db, 'users'), orderByChild('points'), limitToLast(10));
    const unsubscribeLeaderboard = onValue(leaderboardRef, (snapshot) => {
      //@ts-ignore
      const users = [];
      snapshot.forEach((child) => {
        users.push({ id: child.key, ...child.val() });
      });

      // Sort in descending order of points
      //@ts-ignore
      users.sort((a, b) => b.points - a.points);
      //@ts-ignore
      const rank = users.findIndex(user => user.id === userId) + 1;
      if (rank > 0) {
        setUserRank(rank.toString());
      } else {
        setUserRank('Not in top 10');
      }
    });

    return () => {
      unsubscribeUser();
      unsubscribeLeaderboard();
    };
  }, []);

  return (
    <Container>
      <ProfileImage source={{ uri: userData.profileImageUrl }} />
      <UserInfo>
        <UserName>{userData.username}</UserName>
        <UserLocation>
          <City>{userData.city},</City>
          <UserState>{userData.state}</UserState>
        </UserLocation>
      </UserInfo>
      <StatsContainer>
        <InfoBox>
          <StatName>Quizzes Completed</StatName>
          <StatValue>{userData.quizCompleted}</StatValue>
        </InfoBox>
        <InfoBox>
          <StatName>Points</StatName>
          <StatValue>{userData.points}</StatValue>
        </InfoBox>
        <InfoBox>
          <StatName>Leaderboard Rank</StatName>
          <StatValue>{userRank === 'Not in top 10' ? userRank : `#${userRank}`}</StatValue>
        </InfoBox>
        <InfoBox>
          <StatName>Quiz unlock</StatName>
          <StatValue>Advanced</StatValue>
        </InfoBox>
      </StatsContainer>
      <BioContainer>
        <BioText>{userData.bio}</BioText>
      </BioContainer>
      <EditButton onPress={() => navigation.navigate("EditProfile")}>
        <EditText>Edit Profile</EditText>
      </EditButton>
    </Container>
  );
};

export default ProfileScreen;

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
  margin-bottom: 30px;
`;
// @ts-ignore
const UserInfo = Styled.View`
  align-items: center;
  margin-bottom: 20px;
`;
// @ts-ignore
const UserName = Styled.Text`
  font-size: 24px;
  font-weight: bold;
    margin-bottom: 10px;
`;
// @ts-ignore
const UserLocation = Styled.View`
  flex-direction: row;
  justify-content: center;
`;
// @ts-ignore
const City = Styled.Text`
  font-size: 16px;
  margin-right: 5px;
`;
// @ts-ignore
const UserState = Styled.Text`
  font-size: 16px;
`;
// @ts-ignore
const StatsContainer = Styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`;
// @ts-ignore
const InfoBox = Styled.View`
  background-color: #32a7a4;
  border-radius: 8px;
  padding: 15px;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  scale: 2px;
  width: 48%; 
  margin-bottom: 10px;
`;
// @ts-ignore
const StatName = Styled.Text`
  font-size: 14px;
  color: white;
`;
// @ts-ignore
const StatValue = Styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  color: white;
`;
// @ts-ignore
const BioContainer = Styled.View`
  margin-top: 10px;
  padding: 20px;
  background-color: #f0f3f5;
  border-radius: 8px;
  width: 100%;
`;
// @ts-ignore
const BioText = Styled.Text`
  font-size: 16px;
  text-align: center;
  color: #666;
`;

// @ts-ignore
const EditButton = Styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 20px;
  margin-top: 20px;
`;
// @ts-ignore
const EditText = Styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
