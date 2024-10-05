import { UserProps } from './type';

import './styles.css';

export const User = ({ user }: UserProps) => {
  return (
    <tr className="userRow">
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
};
