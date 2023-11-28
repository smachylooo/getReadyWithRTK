import React, { FC, useState } from 'react';
import { useCreatePostMutation, useGetPostsQuery } from '../api/postApi';

interface IPostListProps {

};

const PostList:FC<IPostListProps> = ({}) => {

  const[turnOn,setTurnOn] = useState(false);

  const {
    data: posts,
    isSuccess,
  } = useGetPostsQuery(null, {
    refetchOnMountOrArgChange: true,
    skip: !turnOn
  });

  const [createPost] = useCreatePostMutation();

  const onClick=()=>{
    createPost({
      body: 'Discription',
      title: 'Test',
      userId: 1
    })
  }

  const onTurn=()=>{
    setTurnOn(prev => !prev)
  }
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={onTurn}>Turn on Fetch</button>
      <button onClick={onClick}>Add Post</button>
      {isSuccess && posts?.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  )
};

export default PostList;