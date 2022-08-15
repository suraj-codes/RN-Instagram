import React, {useEffect} from 'react';
import {TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import images from 'res/images';

// function tapToLike(likeIcon) {
//   if (likeIcon % 2 === 0) {
//     return images.redHeart;
//   } else {
//     return images.like;
//   }
// }
function tapToBookmark(bookmarkIcon) {
  if (bookmarkIcon % 2 === 0) {
    return images.bookmarkWhite;
  } else {
    return images.bookmark;
  }
}

export default function PostActions({post, updateLike}) {
  // const [likeIcon, setLikeIcon] = React.useState(post.isLiked ? 2 : 1);
  const [bookmarkIcon, setBookmarkIcon] = React.useState(1);

  // useEffect(() => {
  //   setLikeIcon(post.isLiked ? 2 : 1);
  // }, [post]);
  return (
    <View style={Styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <TouchableOpacity onPress={updateLike}>
          <Image
            source={post.isLiked ? images.redHeart : images.like}
            style={Styles.actionIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed Comment')}>
          <Image source={images.comment} style={Styles.actionIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed Direct Message')}>
          <Image source={images.direct_message} style={Styles.actionIcons} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setBookmarkIcon(bookmarkIcon + 1)}>
        <Image
          source={tapToBookmark(bookmarkIcon)}
          style={Styles.actionIcons}
        />
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    //paddingStart: 20,
    marginEnd: 15,
    marginTop: 15,
  },
  actionIcons: {
    width: 23,
    height: 23,
    marginStart: 15,
  },
});
