// Mock the necessary Firebase and navigation methods
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignupScreen from './SignupScreen';
import { beforeEach, describe, it } from "@jest/globals";
import expect from "expect"; // Adjust the path to where your SignupScreen component is located

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({
    user: {
      uid: '123',
      email: 'test@example.com',
    }
  })),
  sendEmailVerification: jest.fn(() => Promise.resolve()),
}));

jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
  ref: jest.fn(),
  set: jest.fn(() => Promise.resolve()),
}));

jest.mock('../../utils/firebaseHelper', () => ({
  getFirebaseApp: jest.fn(),
}));

const mockNavigate = jest.fn();
const props = { navigation: { navigate: mockNavigate } };

describe('SignupScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should allow a user to sign up with valid data', async () => {
    const { getByPlaceholderText, getByText } = render(<SignupScreen {...props} />);

    fireEvent.changeText(getByPlaceholderText('Username'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('Email Address'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.changeText(getByPlaceholderText('Repeat Password'), 'password123');
    fireEvent.press(getByText('Sign Up'));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('Login');
    }, { timeout: 5000 }); // Increase timeout if necessary
  });
});
