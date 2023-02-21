import '@testing-library/jest-dom';
import Hero from '@/components/Hero/hero';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Hero component', () => {
  test('renders with the correct props', () => {
    const heading = 'Welcome to My Site';
    const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const cta = 'Get Started';
    const toggleHeader = jest.fn();

    render(
      <Hero heading={heading} message={message} cta={cta} toggleHeader={toggleHeader} />
    );

    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText(cta)).toBeInTheDocument();
  });

  test('calls toggleHeader when the button is clicked', () => {
    const heading = 'Welcome to My Site';
    const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const cta = 'Get Started';
    const toggleHeader = jest.fn();

    render(
      <Hero heading={heading} message={message} cta={cta} toggleHeader={toggleHeader} />
    );

    const button = screen.getByRole('button', { name: 'Click Me' });
    fireEvent.click(button);

    expect(toggleHeader).toHaveBeenCalled();
  });
});
