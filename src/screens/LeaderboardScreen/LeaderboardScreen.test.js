// LeaderboardScreen.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import LeaderboardScreen from './LeaderboardScreen'; // Adjust the path to where your LeaderboardScreen component is located
import { getDatabase, ref, query, orderByChild, limitToLast, onValue } from 'firebase/database';
import expect from "expect";
import { describe, it } from "@jest/globals";

jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
  ref: jest.fn(),
  query: jest.fn(),
  orderByChild: jest.fn(),
  limitToLast: jest.fn(),
  onValue: jest.fn((ref, callback) => {
    const snapshot = {
      forEach: (childCallback) => {
        // Example data to simulate Firebase response
        const users = [
          { key: '1', val: () => ({ username: 'User 1', points: 100, profileImageUrl: 'http://example.com/user1.jpg' }) },
          { key: '2', val: () => ({ username: 'User 2', points: 90, profileImageUrl: 'http://example.com/user2.jpg' }) },
          // Add more users as needed for your test
        ];
        users.forEach(childCallback);
      }
    };
    callback(snapshot);
  })
}));

describe('LeaderboardScreen', () => {
  it('should render leaderboard data correctly', async () => {
    const { findByText } = render(<LeaderboardScreen />);

    expect(await findByText('User 1')).toBeTruthy();
    expect(await findByText('100')).toBeTruthy();
    expect(await findByText('User 2')).toBeTruthy();
    expect(await findByText('90')).toBeTruthy();
    // Add more assertions as necessary
  });
});
