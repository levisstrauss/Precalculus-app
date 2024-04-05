// LoginScreen.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';
import expect from "expect";
import { beforeEach, describe, it } from "@jest/globals"; // Adjust the path to where your LoginScreen component is located

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve({
    user: {
      uid: '123',
      email: 'test@example.com',
      emailVerified: false, // You can adjust this based on the test case
    }
  })),
}));

jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
  ref: jest.fn(),
  get: jest.fn(() => Promise.resolve({
    exists: () => true,
    val: () => ({ username: 'testuser' })
  })),
}));

jest.mock('../../utils/firebaseHelper', () => ({
  getFirebaseApp: jest.fn(),
}));

const mockNavigate = jest.fn();
const props = { navigation: { navigate: mockNavigate } };

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should allow a user to log in with valid data and verified email', async () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginScreen {...props} />);

    fireEvent.changeText(getByPlaceholderText('Enter your email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.press(getByTestId('loginButton'));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('Feed', { username: 'testuser' });
    }, { timeout: 5000 }); // Increase timeout if necessary
  });

  // Add more tests as needed, e.g., for invalid credentials, unverified email, etc.
});
