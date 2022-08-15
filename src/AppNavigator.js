import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import MainNavigator from './containers/main/MainNavigator';
import {useSelector, useDispatch} from 'react-redux';
import LoginScreen from './containers/auth/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage';
import {LoginSuccess} from './store/actions/Auth';

StatusBar.setBarStyle('light-content');

export default function AppNavigator() {
  const validate = useSelector((store) => store.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('auth');
        const auth = jsonValue != null ? JSON.parse(jsonValue) : null;
        if (auth?.isLoggedIn) {
          dispatch(LoginSuccess(auth.token));
        }
      } catch (e) {
        console.log(e);
      }
    };
    checkUser();
  }, [dispatch]);

  const Stack = createStackNavigator();
  return validate ? (
    <MainNavigator />
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}
