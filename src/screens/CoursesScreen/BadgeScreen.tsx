import React, { useEffect, useState } from "react";
import Styled from "styled-components/native";
import { ScrollView } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

// Static data for badges.
const badgesData = [
  { id: 1, name: "Function Master", description: "Expert in Composite and Inverse Functions.", imageUrl: "https://cl.ly/55da82beb939/download/avatar-default.jpg" },
  { id: 2, name: "Trigonometry Wizard", description: "Master of Trigonometry.", imageUrl: "https://cl.ly/55da82beb939/download/avatar-default.jpg" },
  { id: 3, name: "Complex Genius", description: "Solved Complex Numbers.", imageUrl: "https://cl.ly/55da82beb939/download/avatar-default.jpg" },
  { id: 4, name: "Rational Champion", description: "Aced Rational Functions.", imageUrl: "https://cl.ly/55da82beb939/download/avatar-default.jpg" },
  { id: 5, name: "Conics Expert", description: "Mastered Conics.", imageUrl: "https://cl.ly/55da82beb939/download/avatar-default.jpg" },
  { id: 6, name: "Vector Vanguard", description: "Leader in Vectors.", imageUrl: "https://cl.ly/55da82beb939/download/avatar-default.jpg" },
  { id: 7, name: "Matrix Master", description: "Decoded Matrices.", imageUrl: "https://cl.ly/55da82beb939/download/avatar-default.jpg" },
  { id: 8, name: "Advanced Achiever", description: "Excellence in advanced concepts.", imageUrl: "https://cl.ly/55da82beb939/download/avatar-default.jpg" },
];

/**
 * Badge component that displays a single badge.
 *
 * @param {Object} props - The properties for the Badge component.
 * @param {string} props.name - The name of the badge.
 * @param {string} props.description - The description of the badge.
 * @param {string} props.imageUrl - The image URL of the badge.
 * @param {boolean} props.isUnlocked - Whether the badge is unlocked or not.
 * @returns The Badge component JSX.
 */
// @ts-ignore
const Badge = ({ name, description, imageUrl , isUnlocked}) => {
  return (
    <BadgeContainer style={{ opacity: isUnlocked ? 1 : 0.2 }}>
      <BadgeImage source={{ uri: imageUrl }} />
      <BadgeName>{name}</BadgeName>
      <BadgeDescription>{description}</BadgeDescription>
    </BadgeContainer>
  );
};

/**
 * BadgeScreen component that displays all badges.
 * It fetches unlocked badges from Firebase and displays them.
 *
 * @returns The BadgeScreen component JSX.
 */
const BadgeScreen = () => {
  const [unlockedBadges, setUnlockedBadges] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const userId = getAuth().currentUser?.uid;
    if (userId) {
      const userBadgesRef = ref(db, `users/${userId}/unlockedBadges`);
      onValue(userBadgesRef, (snapshot) => {
        const badges = snapshot.val() || [];
        console.log("Unlocked badges updated:", badges);
        setUnlockedBadges(badges);
      });
    }
  }, []);

  return (
    <Container>
      <DescriptionContainer>
        <DescriptionTitle>Achievements</DescriptionTitle>
        <DescriptionText>
          Learn and collect badges to display your achievements.
        </DescriptionText>
      </DescriptionContainer>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
          {badgesData.map((badge) => (
            <Badge
              key={badge.id}
              name={badge.name}
              description={badge.description}
              imageUrl={badge.imageUrl}
              //@ts-ignore
              isUnlocked={unlockedBadges.includes(badge.name)}
            />
          ))}
      </ScrollView>
    </Container>
  );
};

export default BadgeScreen;


// Styled components for layout and styling
const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const DescriptionContainer = Styled.View`
  padding: 5px;
  background-color: #f7f7f7;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

const DescriptionTitle = Styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

const DescriptionText = Styled.Text`
  font-size: 16px;
  color: #666;
  line-height: 20px;
`;


const BadgeContainer = Styled.TouchableOpacity` 
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin: 8px;
  background-color: #fff;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  elevation: 4; 
  width: 150px;
`;

const BadgeImage = Styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
  border-radius: 30px;
`;

const BadgeName = Styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  text-align: center;
`;

const BadgeDescription = Styled.Text`
  font-size: 14px;
  color: #666;
  text-align: center;
`;
