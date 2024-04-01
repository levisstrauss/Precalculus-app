// SignupScreen.test.js
jest.mock('@react-native-firebase/auth', () => require('__mocks__/firebase-mock'));
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignupScreen from './SignupScreen';

// Mock Firebase functions
jest.mock('@react-native-firebase/auth', () => require('__mocks__/firebase-mock'));
jest.mock('@react-native-firebase/database', () => require('__mocks__/firebase-mock'));

describe('SignupScreen', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<SignupScreen />);

    // Check if essential elements are rendered
    const usernameInput = getByPlaceholderText('Username');
    const emailInput = getByPlaceholderText('Email Address');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Repeat Password');
    const signupButton = getByText('Sign Up');

    expect(usernameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(confirmPasswordInput).toBeTruthy();
    expect(signupButton).toBeTruthy();
  });

  test('handles signup process correctly', async () => {
    const { getByPlaceholderText, getByText } = render(<SignupScreen />);

    // Fill out the form
    const usernameInput = getByPlaceholderText('Username');
    const emailInput = getByPlaceholderText('Email Address');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Repeat Password');
    const signupButton = getByText('Sign Up');

    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.changeText(confirmPasswordInput, 'password123');

    fireEvent.press(signupButton);

    // Assert that loading state is active
    expect(getByText('Loading...')).toBeTruthy();

    // Wait for the loading to finish (mocking Firebase operations)
    await waitFor(() => {
      // Assert that success state is active
      expect(getByText('Success!')).toBeTruthy();
    });
  });
});

