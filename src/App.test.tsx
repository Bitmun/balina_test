import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { App } from './App';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { describe, expect, test } from 'vitest';

const mock = new MockAdapter(axios);

describe('App', () => {
  test('searches and displays users', async () => {
    mock
      .onGet('https://jsonplaceholder.typicode.com/users?name=Leanne')
      .reply(200, [
        { id: 1, username: 'Leanne', email: 'leanne@e.com', phone: '123-456-7890' },
      ]);

    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/Enter name/i), {
      target: { value: 'Leanne' },
    });

    fireEvent.click(screen.getByText(/search/i));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/leanne@e.com/i)).toBeInTheDocument();
    });
  });
});
