import Hero from '@/components/Hero/hero';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer/footer';

describe('Footer component', () => {
    test('renders with the correct text and links', () => {
      render(<Footer />);
      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(4);
  
      const linkLabels = links.map((link) => link.textContent);
      expect(linkLabels).toContain('Terms');
      expect(linkLabels).toContain('Privacy');
      expect(linkLabels).toContain('Sitemap');
  
      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(2);
  
      const headingTexts = headings.map((heading) => heading.textContent);
      expect(headingTexts).toContain('Fakesite');
      expect(headingTexts).toContain('Account');
    });
  });