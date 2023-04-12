import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';

test('renders learn react link', () => {
  render(
    <Header />,
    <Section1 />,
    <Section2 />,
    <Section3 />,
    <App />,
    <Footer />
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
