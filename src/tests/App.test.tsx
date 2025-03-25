import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from '../App';

describe('App component', () => {
  it('renders header', () => {
    render(<App />);
    const header = screen.getByText(/todos/i);
    expect(header).toBeInTheDocument();
  });

  it('renders input', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/what needs to be done/i);
    expect(inputElement).toBeInTheDocument();
  });
});
