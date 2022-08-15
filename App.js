import AppNavigator from './src/AppNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store/store';
// import {PersistGate} from 'redux-persist/integration/react';

const configureStore = store();

function App() {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>{<AppNavigator />}</NavigationContainer>
    </Provider>
  );
}

export default App;
