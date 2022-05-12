import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ModalDelete } from './ModalDelete';

describe(('Test component ModalDelete'), () => {
  test('render component ModalDelete', () => {
    let modalDelete;
    act(() => {
      modalDelete = create(<ModalDelete openModalDelete />);
    });
    expect(modalDelete.toJSON()).toMatchSnapshot();
  });

  const mockOnClick = jest.fn();

  test('value when click on button cancel', () => {
    const componentModal = render(
      <ModalDelete openModalDelete closeModalDelete={mockOnClick} />,
    );
    const button = componentModal.getByText('Cancel');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('value when clicked button delete', () => {
    const componentModal = render(
      <ModalDelete openModalDelete closeModalDelete={mockOnClick} />,
    );
    const button = componentModal.getByText('Delete');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  screen.debug();
});
