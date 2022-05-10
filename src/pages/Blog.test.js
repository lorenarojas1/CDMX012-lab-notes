/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { Blog } from './Blog';

describe(('Test component Blog'), () => {
  const mockOnClick = jest.fn();
  test('render component Blog', () => {
    let blog;
    act(() => {
      blog = create(
        <Router>
          <Blog isAuth={mockOnClick} />
        </Router>,
      );
    });
    expect(blog.toJSON()).toMatchSnapshot();
  });

  test('value when clicked', () => {
    const componentNav = render(
      <Router>
        <Blog isAuth={mockOnClick} />
      </Router>,
    );
    screen.debug();

    const button = componentNav.getByText('CREATE A NOTE');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});