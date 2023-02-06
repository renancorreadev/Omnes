import { render, screen } from '@testing-library/react';

import Footer from '@/pages/index';

describe('Index page', () => {
  describe('Render Component test', () => {
    it('should render Footer Component', () => {
      render(<Footer />);

      const linkToTest = screen.getByRole('link', {
        name: /skynance.net/,
      });

      expect(linkToTest).toBeInTheDocument();
    });
  });
});
