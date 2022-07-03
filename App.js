import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import MainNavigator from './navigation/MainNavigator';

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import shopReducer from './store/reducers/reducers';
import cartReducer from './store/reducers/cart';
import { init} from './dbSQLite/db';


init().then(() => {
  console.log('SQLite successfully initialised ');
}).catch((err) => {
  console.log(err);
});

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer
});
const store = configureStore({ reducer: rootReducer });

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});
