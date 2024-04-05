import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import HomeScreen from './HomeScreen';
import { NavigationContext } from 'react-navigation';
import expect from "expect";
import { describe, it } from "@jest/globals";

const mockStore = {
  getState: () => ({ action: 'closeMenu' }), // Example state
  subscribe: () => {},
  dispatch: jest.fn(),
};

const mocks = [
  {
    request: {
      query: gql`
        {
          cardsCollection {
            items {
              title
              subtitle
              image {
                url
              }
              logo {
                url
              }
              caption
              content
            }
          }
        }
      `,
    },
    result: {
      data: {
        cardsCollection: {
          items: [
            {
              title: 'Card Title 1',
              subtitle: 'Card Subtitle 1',
              image: { url: 'https://example.com/image1.jpg' },
              logo: { url: 'https://example.com/logo1.jpg' },
              caption: 'Card Caption 1',
              content: 'Card Content 1',
            },
            // Add more mock cards as needed
          ],
        },
      },
    },
  },
];

const mockNavigation = {
  navigate: jest.fn(),
  push: jest.fn(),
};

describe('HomeScreen', () => {
  it('renders correctly', async () => {
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={mockStore}>
          <NavigationContext.Provider value={mockNavigation}>
            <HomeScreen />
          </NavigationContext.Provider>
        </Provider>
      </MockedProvider>
    );

    expect(await findByText('Card Title 1')).toBeTruthy();
    // Add more assertions as needed
  });
});
