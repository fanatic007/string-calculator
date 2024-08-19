import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '.';

describe('CalculatorInput', () => {
  it('should have input, button and result line', () => {
    render(<Calculator/>);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button');
    const resultElement = screen.getByText(/Result/);
    expect(inputElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
    expect(resultElement).toBeTruthy();
  });

  it('displays result', () => {
    render(<Calculator/>);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button');
    
    userEvent.type(inputElement, '1,2');
    userEvent.click(buttonElement);

    const resultElement = screen.getByText(/3/);
    expect(resultElement).toBeInTheDocument();
  });

  it('displays error', () => {
    render(<Calculator/>);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button');
    
    userEvent.type(inputElement, '1,-2');
    userEvent.click(buttonElement);

    const resultElement = screen.getByText(/Error/);
    expect(resultElement).toBeInTheDocument();
  });

});