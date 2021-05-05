/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable */

import React from 'react';
import type {Node} from 'react';
import { Text } from 'react-native';
import SplasSeceren from './SplasSeceren';
import Login from './Login';
import Home from './OTP';
import Routes from './Routes';
// import {SplashScreen} from '../src/Screens/SplashScreen';


const App: () => Node = () => {
    return (
      // <SplasSeceren/>
      // <Login />
      // <Home/>
      <Routes/>
  );
};


export default App;
