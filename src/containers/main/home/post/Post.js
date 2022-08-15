import React, {useState} from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostLikes from './PostLikes';
import PostText from './PostText';
import PostComments from './PostComments';
import PostPublishDate from './PostPublishDate';
import {toggleLike} from '../../../../API/api';

export default function Post({post}) {
  const [postData, setPostData] = useState(post);
  const updateLike = async () => {
    if (postData.isLiked) {
      setPostData((prevState) => ({
        ...prevState,
        likesCount: prevState.likesCount - 1,
        isLiked: false,
      }));
    } else {
      setPostData((prevState) => ({
        ...prevState,
        likesCount: prevState.likesCount + 1,
        isLiked: true,
      }));
    }
    const response = await toggleLike(post._id);
    console.log(response);
  };
  return (
    <React.Fragment>
      <PostHeader post={postData} />
      <PostImage post={postData} updateLike={updateLike} />
      <PostActions post={postData} updateLike={updateLike} />
      <PostLikes post={postData} />
      <PostText post={postData} />
      <PostComments post={postData} />
      <PostPublishDate post={postData} />
    </React.Fragment>
  );
}
