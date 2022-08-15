import React, {useEffect, useState} from 'react';
import {FlatList, ToastAndroid, View} from 'react-native';
import Post from './post/Post';
import colors from '../../../res/colors';
import {Text} from 'react-native';
import {Image} from 'react-native';
import images from 'res/images';
import StoryContainer from './story/StoryContainer';
import {feed} from '../../../API/api';
import AsyncStorage from '@react-native-community/async-storage';

export default function HomeScreen({navigation}) {
  const [postsData, setPostsData] = useState([]);
  const storyOnPress = () => navigation.navigate('StoryScreen');

  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const checkUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        if (jsonValue) {
          setProfileData(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log(e);
      }
    };
    checkUser();
  }, []);

  const stories = [
    {
      src: profileData.avatar,
      key: 'Your story',
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await feed();
        if (response.success) {
          setPostsData(response.data);
        } else {
          ToastAndroid.showWithGravityAndOffset(
            response.message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            0,
            100,
          );
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <FlatList
      style={{backgroundColor: colors.background}}
      data={[{key: 1}]}
      ListHeaderComponent={() => (
        <StoryContainer stories={stories} storyOnPress={storyOnPress} />
      )}
      renderItem={({item, index}) => {
        return postsData.map((post) => (
          <Post post={post} key={post.createdAt} />
        ));
      }}
    />
  );
}
