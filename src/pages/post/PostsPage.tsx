import { FC } from "react";
import { Link } from "react-router-dom";
import PostList from "../../entities/posts/ui/PostsList";

interface IPostPageProps {

};

const PostsPage:FC<IPostPageProps> = ({}) => {
  return (
    <div>
      <Link to="/users" >go to Users</Link>
      <PostList />
    </div>
  )
};

export default PostsPage;