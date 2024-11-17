import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders react logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText("logo");
  expect(logoElement).toBeInTheDocument();
});

test('renders short name paragraph', () => {  
  render(<App />);
  const inputElement = screen.getByTestId("textInput")
  const inputButton = screen.getByTestId("inputButton")
  fireEvent.change(inputElement, {target:{value:"AA"}})
  fireEvent.click(inputButton)
  const shortElement = screen.getByTestId("pageShort")
  expect(shortElement).toBeInTheDocument();
});

test('renders long  name paragraph', () => {  
  render(<App />);
  const inputElement = screen.getByTestId("textInput")
  const inputButton = screen.getByTestId("inputButton")
  fireEvent.change(inputElement, {target:{value:"AAAAAA"}})
  fireEvent.click(inputButton)
  const longElement = screen.getByTestId("pageLong")
  expect(longElement).toBeInTheDocument();
});