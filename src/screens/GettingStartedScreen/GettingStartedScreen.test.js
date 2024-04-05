import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GettingStartedScreen from './GettingStartedScreen';
import { describe, it } from "@jest/globals";
import expect from "expect"; // Adjust the import path as necessary

// Mock the navigation prop
const mockNavigation = {
  push: jest.fn(),
};

describe('GettingStartedScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<GettingStartedScreen navigation={mockNavigation} />);

    expect(getByText('Pre-Calculus')).toBeTruthy();
    expect(getByText('Learn pre-\ncalculus concepts')).toBeTruthy();
    expect(getByText('Get Started')).toBeTruthy();
  });

  it('navigates to the login screen when the "Get Started" button is pressed', () => {
    const { getByText } = render(<GettingStartedScreen navigation={mockNavigation} />);

    const getStartedButton = getByText('Get Started');
    fireEvent.press(getStartedButton);

    expect(mockNavigation.push).toHaveBeenCalledWith('Login');
  });
});
