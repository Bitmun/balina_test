import { useState } from 'react';

import { UserSearchProps } from './type';

import './styles.css';

export const UserSearch = ({ handleSearch }: UserSearchProps) => {
  const [name, setName] = useState('');

  const handleClick = () => {
    handleSearch(name);
  };

  return (
    <div className="searchWrapper">
      <input
        type="text"
        placeholder="Enter name..."
        value={name.trimStart()}
        onChange={(e) => setName(e.target.value)}
        className="searchInput"
      />
      <button
        onClick={handleClick}
        disabled={name.trim().length === 0}
        className="searchButton"
      >
        Search
      </button>
    </div>
  );
};
