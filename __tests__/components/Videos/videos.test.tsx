import { render, screen } from '@testing-library/react';
import Videos from '@/components/Videos/videos';

test('renders a list of videos', async () => {
  render(<Videos />);

  // Wait for video list to load
  const videoList = await screen.findByRole("main",{ name: 'video-list' });

  // Check that video list is visible
  expect(videoList).toBeVisible();

});

test('navigates to next video on scroll', async () => {
  render(<Videos />);


});