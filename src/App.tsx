import { useState } from 'react';

import { User } from './Components/type';
import { UserList } from './Components/UserList/UserList';
import { UserSearch } from './Components/UserSearch/UserSearch';

import './styles.css';
import axios from 'axios';

export const App = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);

  const handleSearch = async (name: string) => {
    setError(false);
    setIsLoading(true);
    try {
      await axios
        .get(`https://jsonplaceholder.typicode.com/users?name=${name}`)
        .then((res) => {
          setUsers(res.data);
        });
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="main">
      <h1 className="orangeGradient">Find your user</h1>
      <UserSearch handleSearch={handleSearch} />
      {isLoading && <h2 className="loader">Loading...</h2>}
      {error && <h2 className="loader">Some error occured.</h2>}
      {!isLoading && users != null && <UserList users={users} />}
    </main>
  );
};
