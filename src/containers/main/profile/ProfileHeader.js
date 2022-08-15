import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ToastAndroid} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {profile} from '../../../API/api';

export default function ProfileHeader({profileData}) {
  return (
    profileData && (
      <View style={Styles.container}>
        <TouchableOpacity>
          <Image
            source={{uri: profileData.avatar}}
            style={Styles.prfilePicture}
          />
        </TouchableOpacity>

        <View style={Styles.container2}>
          <View style={Styles.container3}>
            <TouchableOpacity>
              <Text style={Styles.numberContainer}>
                {profileData.postCount}
              </Text>
              <Text style={Styles.text}>Posts</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.container3}>
            <TouchableOpacity>
              <Text style={Styles.numberContainer}>
                {profileData.followersCount}
              </Text>
              <Text style={Styles.text}>Followers</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.container3}>
            <TouchableOpacity>
              <Text style={Styles.numberContainer}>
                {profileData.followingCount}
              </Text>
              <Text style={Styles.text}>Following</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  prfilePicture: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginLeft: 20,
  },
  numberContainer: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 15,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginEnd: 20,
  },
  text: {
    color: 'white',
    //fontWeight: 'bold',
    alignSelf: 'center',
  },
  container3: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
});
