import React, { useEffect, useState } from "react";
import  styled from 'styled-components/native';
import { getDatabase, ref, query, orderByChild, limitToLast, onValue } from 'firebase/database';

/**
 * `LeaderboardScreen` is a React functional component that displays a leaderboard
 * showing the top users based on their points. It fetches and listens to real-time
 * updates from Firebase's Realtime Database.
 *
 * @returns The LeaderboardScreen component's JSX elements.
 */
const LeaderboardScreen = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    // Query the 'users' collection directly for top 10 users by points
    const leaderboardRef = query(ref(db, 'users'), orderByChild('points'), limitToLast(10));

    const unsubscribeLeaderboard = onValue(leaderboardRef, (snapshot) => {
      // @ts-ignore
      const leaderboardArray = [];
      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        leaderboardArray.push({
          id: childSnapshot.key,
          name: userData.username || 'Anonymous',
          score: userData.points || 0,
          profileImage: userData.profileImageUrl,
        });
      });
      // @ts-ignore
      leaderboardArray.reverse(); // Reverse to make it descending
      // @ts-ignore
      setLeaderboardData(leaderboardArray);
    });

    return () => unsubscribeLeaderboard();
  }, []);

  // @ts-ignore
  const renderItem = ({ item, index }) => (
    <UserRow>
      <Rank>{index + 1}</Rank>
      <ProfileImage source={{ uri: item.profileImage || "https://cl.ly/55da82beb939/download/avatar-default.jpg"}} />
      <UserName>{item.name}</UserName>
      <Score>{item.score}</Score>
    </UserRow>
  );
  return (
    <Container>
      <LeaderboardList
        data={leaderboardData}
        renderItem={renderItem}
        // @ts-ignore
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default LeaderboardScreen;

const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;
  align-items: center;
  justify-content: center;
`;

const LeaderboardList = styled.FlatList`
  width: 100%;
`;
const UserRow = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
    margin: 5px 15px;
    padding: 15px;
    border-radius: 10px;
    /* iOS Shadows */
    shadow-opacity: 0.1;
    shadow-radius: 4px;
    shadow-color: #000;
   
`;
const Rank = styled.Text`
    font-size: 18px;
    color: #000;
    width: 25px;
    margin-right: 10px;
`;
const UserName = styled.Text`
    font-size: 16px;
    flex: 1;
    color: #333;
`;
const Score = styled.Text`
    font-size: 18px;
    color: #e76f51;
`;
const ProfileImage = styled.Image`
  width: 40px;  
  height: 40px; 
  border-radius: 20px; 
  margin-right: 10px; 
`;
