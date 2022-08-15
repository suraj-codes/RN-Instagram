import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import palette from 'res/palette';
import ProfileHeader from './ProfileHeader';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import UserBio from './UserBio';
import EditProfileButton from './EditProfileButton';
import ConstantStories from './ConstantStories';
import LineSeperator from './LineSeperator';
import ProfileGrid from './ProfileGrid';
import colors from '../../../res/colors';
import GridIcon from './gridIcon';
import AsyncStorage from '@react-native-community/async-storage';
import {userDetails} from '../../../API/api';

const data = [{key: '1'}];

export default function ProfileScreen() {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const checkUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        if (jsonValue) {
          const json = JSON.parse(jsonValue);
          const response = await userDetails(json.username);
          console.log(response);
          if (response.success) {
            setProfileData(response.data);
            try {
              await AsyncStorage.setItem('user', JSON.stringify(response.data));
            } catch (e) {
              console.log(e);
            }
          } else {
            ToastAndroid.showWithGravityAndOffset(
              response.message,
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              0,
              100,
            );
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    checkUser();
  }, []);

  return (
    <FlatList
      style={{flex: 1, backgroundColor: colors.bottomBackGround}}
      data={data}
      renderItem={() => (
        <>
          <ProfileHeader profileData={profileData} />
          <UserBio profileData={profileData} />
          <EditProfileButton />
          <ConstantStories />
          <LineSeperator />
          <GridIcon />
          <ProfileGrid />
        </>
      )}
    />
  );
}
