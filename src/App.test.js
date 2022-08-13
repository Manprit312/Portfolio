import { render, screen } from '@testing-library/react';
import Biocontainer from './Biocontainer';
import  "Index.css";

test('renders learn react link', () => {
  render(<Biocontainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
