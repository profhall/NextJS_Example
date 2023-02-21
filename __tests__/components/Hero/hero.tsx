import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero/hero';


describe("Hero page", () => {
    it("should render", () => {
        render(<Hero message={""} cta={""} heading={""} toggleHeader={""} />);
    const main = screen.getByRole("div");
    expect(main).toBeInTheDocument();
    });
});
