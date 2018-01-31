/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {listChamp} from './data/listchamp.js';
import { AppRegistry } from 'react-native';


import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './Reducer';

import Root from './Components/root.js';


let store = createStore(allReducers);

const App = () => (
    <Provider store = {store}>
        <Root />
    </Provider>
);

export default App;

