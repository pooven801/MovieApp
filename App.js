import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import Entry from './navigation/Entry';
import theme from './theme/theme';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Entry />
      </NavigationContainer>
    </PaperProvider>
  );
}
