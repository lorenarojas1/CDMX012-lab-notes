import { render, screen } from '@testing-library/react';
import LoginPage from './pages/login';

const newLocal = screen.getByPlaceholderText('email@example.com');

test('renders learn react link', () => {
  render(<LoginPage />);
  const linkElement = newLocal;
  expect(linkElement).toBeInTheDocument();
});
