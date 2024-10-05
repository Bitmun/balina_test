import { useState } from 'react';

import { User } from './Components/type';
import { UserList } from './Components/UserList/UserList';
import { UserSearch } from './Components/UserSearch/UserSearch';

import './styles.css';
import axios from 'axios';

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (name: string) => {
    setIsLoading(true);
    try {
      await axios
        .get(`https://jsonplaceholder.typicode.com/users?name=${name}`)
        .then((res) => {
          console.log(res.data);
          setUsers(res.data);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="main">
      <h1 className="orangeGradient">Find your user</h1>
      <UserSearch handleSearch={handleSearch} />
      {isLoading ? <h2 className="loader">Loading...</h2> : <UserList users={users} />}
    </main>
  );
};
