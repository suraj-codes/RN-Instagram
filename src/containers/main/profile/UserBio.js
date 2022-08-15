import React from 'react';
import {View, Text} from 'react-native';

export default function UserBio({profileData}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginStart: 10,
        marginTop: 20,
      }}>
      <View style={{marginBottom: 5}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          {profileData.username}
        </Text>
      </View>
      <View style={{marginBottom: 5}}>
        <Text style={{color: 'white'}}>{profileData.bio}</Text>
      </View>
    </View>
  );
}
