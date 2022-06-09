import React from 'react';
import { StyleSheet } from 'react-native';
import MainNavigator from './navigation/MainNavigator';

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import shopReducer from './store/reducers/reducers';

const rootReducer = combineReducers({
  shop: shopReducer
});
const store = configureStore({ reducer: rootReducer });

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
