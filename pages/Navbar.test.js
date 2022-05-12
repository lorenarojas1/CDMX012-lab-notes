import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe(('Test component Navbar'), () => {
  test('render component Navbar', () => {
    let navbar;
    act(() => {
      navbar = create(
        <Router>
          <Navbar />
        </Router>,
      );
      expect(navbar.toJSON()).toMatchSnapshot();
    });
  });

  test('create a element dom', () => {
    const testRender = create(
      <Router>
        <Navbar />
      </Router>,
    );
    const testInstance = testRender.root;
    expect(testInstance.findByProps({ className: 'titleApp' }).children).toEqual(['BlogSks']);
  });

  const mockOnClick = jest.fn();

  test('value when clicked', () => {
    const componentNav = render(
      <Router>
        <Navbar onClickButton={mockOnClick} />
      </Router>,
    );

    const button = componentNav.getByText('LogOut');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
