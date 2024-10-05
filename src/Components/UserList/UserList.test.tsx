import { render } from '@testing-library/react';

import { UserList } from './UserList';

import { describe, expect, test } from 'vitest';

const users = [
  {
    id: 1,
    username: 'LeanneCool',
    email: 'leanne@example.com',
    phone: '123-456-7890',
    name: 'Leanne',
  },
  {
    id: 2,
    username: 'ErvinCool',
    email: 'ervin@example.com',
    phone: '987-654-3210',
    name: 'Ervin',
  },
];

describe('UserList', () => {
  test('renders user table with data', () => {
    const { getByText } = render(<UserList users={users} />);

    expect(getByText(/LeanneCool/i)).toBeInTheDocument();
    expect(getByText(/ErvinCool/i)).toBeInTheDocument();
  });

  test('renders "No users found" message if users array is empty', () => {
    const { getByText } = render(<UserList users={[]} />);
    expect(getByText(/no users found/i)).toBeInTheDocument();
  });
});
