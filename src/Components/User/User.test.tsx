import { render } from '@testing-library/react';

import { User } from './User';

import { describe, expect, test } from 'vitest';

const user = {
  id: 1,
  username: 'LeanneCool',
  email: 'leanne@example.com',
  phone: '123-456-7890',
  name: 'Leanne',
};

describe('User Component', () => {
  test('renders user data correctly', () => {
    const { getByText } = render(<User user={user} />);

    expect(getByText(/leanneCool/i)).toBeInTheDocument();
    expect(getByText(/leanne@example.com/i)).toBeInTheDocument();
    expect(getByText(/123-456-7890/i)).toBeInTheDocument();
  });
});
