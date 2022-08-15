import React, {useEffect, useState} from 'react';
import {View, Image, Text, ToastAndroid} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {posts} from '../../../API/api';
import InstaGrid from './InstaGrid';

// const data = [
//   {key: '1'},
//   {key: '2'},
//   {key: '3'},
//   /*{key: '4'},
//   {key: '5'},
//   {key: '6'},
//   {key: '7'},
//   {key: '8'},
//   {key: '9'},
//   {key: '10'},
//   {key: '11'},
//   {key: '12'},
//   {key: '13'},*/
// ];

export default function SearchGrid() {
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await posts();
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
    <InstaGrid
      data={postsData}
      columns={3}
      // loading={loading}
      onItemClick={(item) => {
        console.log('Got the Item:' + JSON.stringify(item));
      }}
      onEndReachedThreshold={400}
      // onEndReached={() => (offset !== -1 ? fetchData() : null)}
    />
  );
}
