import Hero from '@/components/Hero/hero';
import { render, screen } from '@testing-library/react';
import NavBar from '@/components/NavBar/navBar';


describe('NavBar', () => {
    it('renders account link', () => {
      render(<NavBar header="test" />);
      const accountLink = screen.getByRole('link', { name: 'Account' });
      expect(accountLink).toBeInTheDocument();
    });
  
    it('renders help link', () => {
      render(<NavBar header="test" />);
      const helpLink = screen.getByRole('link', { name: 'Help' });
      expect(helpLink).toBeInTheDocument();
    });
  
    it('renders images', () => {
      render(<NavBar header="test" />);
      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(2);
    });
  });