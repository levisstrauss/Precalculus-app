import React from "react";
import Styled from "styled-components/native";
import { Button } from "react-native";

import styled from 'styled-components/native';
import { FlatList, Text } from 'react-native';

const LeaderboardScreen = ({ data }) => {
  const renderItem = ({ item }) => (
    <LeaderboardItem>
      <Rank>#{item.rank}</Rank>
      <Username>{item.username}</Username>
      <Score>{item.score}</Score>
    </LeaderboardItem>
  );

  return (
    <LeaderboardContainer>
      <Header>Leaderboard</Header>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </LeaderboardContainer>
  );
};

export default LeaderboardScreen;

const LeaderboardContainer = styled.View`
  flex: 1;
  background-color: #f8f9fa;
  padding: 20px;
`;

const Header = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #212529;
  margin-bottom: 20px;
  text-align: center;
`;

const LeaderboardItem = styled.View`
  background-color: #ffffff;
  padding: 15px 20px;
  margin-vertical: 8px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: 3; // This adds a subtle shadow on Android
  shadow-opacity: 0.1; // These lines add a subtle shadow on iOS
  shadow-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
`;

const Rank = styled.Text`
  font-size: 24px;
  color: #6c757d;
`;

const Username = styled.Text`
  font-size: 18px;
  color: #495057;
  flex: 1;
  margin-horizontal: 10px;
`;

const Score = styled.Text`
  font-size: 20px;
  color: #28a745;
  font-weight: bold;
`;

const data = [
  { id: 1, rank: 1, username: 'User1', score: 1500 },
  { id: 2, rank: 2, username: 'User2', score: 1450 },
  // ...more users
];
