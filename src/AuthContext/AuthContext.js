// AuthContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state for authentication
const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

// Reducer function to update state based on action
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true, user: action.payload, isLoading: false };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.payload, isLoading: false };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

// Create context
const AuthContext = createContext();

// Context provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
