/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';

export default function PostImage({post, updateLike}) {
  const [size, setSize] = useState({});
  let backCount = 0;
  let backTimer;
  Image.getSize(post.files[0], (width, height) => {
    setSize({width, height});
  });
  return (
    <TouchableWithoutFeedback
      style={{
        position: 'absolute',
        left: 0,
        padding: 20,
        backgroundColor: 'green',
      }}
      onPress={async () => {
        backCount++;
        if (backCount === 2) {
          clearTimeout(backTimer);
          await updateLike();
        } else {
          backTimer = setTimeout(() => {
            backCount = 0;
          }, 1000);
        }
      }}>
      <Image
        source={{uri: post.files[0]}}
        style={{aspectRatio: size.width ? size.width / size.height : 1}}
      />
    </TouchableWithoutFeedback>
  );
}
