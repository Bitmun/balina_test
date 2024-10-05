import { User } from '../User/User';

import { UserListProps } from './type';

import './styles.css';

export const UserList = ({ users }: UserListProps) => {
  if (users.length === 0) {
    return <h2 className="notFound">No users found. Check spelling or try other name</h2>;
  }

  return (
    <div>
      <table className="usersTable">
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
