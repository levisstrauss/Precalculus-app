import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import Navigation from "./src/components/Navigation";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import{getFirebaseApp} from "./src/utils/firebaseHelper";
import { UserProvider } from "./src/UserContext/UserContext.tsx";
import uploadQuizzes from "./src/data";
// Initialize Firebase
getFirebaseApp();


const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/c0bt22mt54y2",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer _3ztjpD1NqPJLV6x3dj2gAt-foSyZJaan2ZLI0ar1e0`
  },
  cache: new InMemoryCache()
});



//------ Initial State ----------------
const initialState = {
  action: ""
}

//------ Reducer ----------------
// @ts-ignore
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return {action: "openMenu"};
    case "CLOSE_MENU":
      return {action: "closeMenu"};
    case "updateName":
      return {name: action.name};
    case "OPEN_CARD":
      return {action: "openCard"};
    case "CLOSE_CARD":
      return {action: "closeCard"};
    default:
      return state;
  }
}

//------ Create Store ----------------
// @ts-ignore
const store = createStore(reducer);

//------ App ----------------
const App = () => {
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </ApolloProvider>
    </UserProvider>
  );
}
export default App;
