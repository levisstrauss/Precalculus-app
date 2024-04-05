import React from 'react';
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { Provider } from 'react-redux';
import Menu from './Menu'; // Ensure this path is correct
import { createStore } from 'redux';
import * as redux from 'react-redux';
import * as firebaseAuth from 'firebase/auth';
import expect from "expect";
import { describe, it } from "@jest/globals";

// Mock Redux store
const mockDispatch = jest.fn();
const store = createStore(() => ({ action: 'closeMenu' }));

// Mock navigation and dispatch
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);

// Mock Firebase auth
jest.mock('firebase/auth');

describe('Menu Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Menu />
      </Provider>
    );
    expect(getByText('Guest')).toBeTruthy();
    expect(getByText('Mathematics learner')).toBeTruthy();
  });

  it('handles logout correctly', async () => {
    const mockSignOut = jest.fn(() => Promise.resolve());
    firebaseAuth.signOut.mockImplementation(mockSignOut);

    const mockNavigate = jest.fn();
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({
        navigate: mockNavigate,
      }),
    }));

    const { getByText } = render(
      <Provider store={store}>
        <Menu />
      </Provider>
    );

    const logoutButton = getByText('Log out');
    fireEvent.press(logoutButton);

    await waitFor(() => {
      expect(mockSignOut).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith({ type: "CLOSE_MENU" });
      expect(mockNavigate).toHaveBeenCalledWith('Login');
    });
  });
});
