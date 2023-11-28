import { FC } from "react";
import { Link } from "react-router-dom";
import UserList from "../../entities/user/ui/UserList";


interface IUserPageProps {

};

const UsersPage:FC<IUserPageProps> = ({}) => {
  return (
    <div>
      <Link to="/" >go to posts</Link>
      <UserList />
    </div>
  )
};

export default UsersPage;