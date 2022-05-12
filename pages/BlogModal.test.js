import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { BlogModal } from './BlogModal';

describe(('Test component Blog'), () => {
  test('render component Blog', () => {
    let blogModal;
    act(() => {
      blogModal = create(
        <Router>
          <BlogModal />
        </Router>,
      );
    });
    expect(blogModal.toJSON()).toMatchSnapshot();
  });
});
