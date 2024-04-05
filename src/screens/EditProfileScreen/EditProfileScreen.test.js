import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import EditProfileScreen from './EditProfileScreen';
import expect from "expect";
import { describe, it } from "@jest/globals"; // Adjust the import path as necessary

jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: { uid: 'testUid' }
  })
}));

jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
  ref: jest.fn(),
  onValue: jest.fn((ref, callback) => {
    const snapshot = { val: () => ({ username: 'testUser', city: 'testCity', state: 'testState', bio: 'testBio', profileImageUrl: 'testUrl' }) };
    callback(snapshot);
  }),
  update: jest.fn(() => Promise.resolve())
}));

jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn((options, callback) => callback({
    didCancel: false,
    assets: [{ uri: 'testImageUri' }]
  }))
}));

describe('EditProfileScreen', () => {
  it('renders correctly and loads user data', () => {
    const { getByText } = render(<EditProfileScreen navigation={{ navigate: jest.fn() }} />);

    expect(getByText('Change profile photo')).toBeTruthy();
    // Add more assertions as needed
  });

  // Add more tests to cover user interactions and functionality
});
