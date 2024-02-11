import React from 'react';
import  styled from 'styled-components/native';


const leaderboardData = [
  { id: '1', rank: 1, name: 'Zakaria', score: '50', profileImage: 'https://via.placeholder.com/50'},
  { id: '2', rank: 2, name: 'Codemon', score: '45', profileImage: 'https://via.placeholder.com/50' },
  { id: '3', rank: 3, name: 'Prad', score: '40', profileImage: 'https://via.placeholder.com/50' },
  { id: '4', rank: 4, name: 'Hamad', score: '35', profileImage: 'https://via.placeholder.com/50' },
  { id: '5', rank: 5, name: 'Josephine', score: '30', profileImage: 'https://via.placeholder.com/50' },
  { id: '6', rank: 6, name: 'Karim', score: '25', profileImage: 'https://via.placeholder.com/50' },
  { id: '7', rank: 7, name: 'Joel', score: '20', profileImage: 'https://via.placeholder.com/50' },
  { id: '8', rank: 8, name: 'Leslie', score: '15', profileImage: 'https://via.placeholder.com/50' },
  { id: '9', rank: 9, name: 'Daniel', score: '10', profileImage: 'https://via.placeholder.com/50' },
  { id: '10', rank: 10, name: 'Ben', score: '50', profileImage: 'https://via.placeholder.com/50' },
];

const LeaderboardScreen = () => {
  // @ts-ignore
  const renderItem = ({ item }) => (
    <UserRow>
      <Rank>{item.rank}</Rank>
      <ProfileImage source={{ uri: item.profileImage }} />
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
