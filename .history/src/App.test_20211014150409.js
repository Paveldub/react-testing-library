import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it('should render App component', () => {
    render(<App />);
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('textbox')).toBeInTheDocument();
    expect(screen.getByAltText('textbox')).toBeInTheDocument();
    expect(screen.getByTitle('textbox')).toBeInTheDocument();

  })
})