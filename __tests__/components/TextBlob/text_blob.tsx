import Hero from '@/components/Hero/hero';
import { render, screen } from '@testing-library/react';
import TextBlob from '@/components/TextBlob/text_blob';

describe('TextBlob', () => {
    it('renders the text blob with the correct header and message', () => {
      const blobH = 'Example header';
      const blobMess = 'Example message';

      const { getByText } = render(<TextBlob blob_head={blobH} blob_message={blobMess} />);
      const headerEl = getByText(blobH);
      const messageEl = getByText(blobMess);
      expect(headerEl).toBeInTheDocument();
      expect(messageEl).toBeInTheDocument();
    });
  });


