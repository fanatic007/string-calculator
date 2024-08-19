import React from 'react';
import { render, screen } from '@testing-library/react';
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
});