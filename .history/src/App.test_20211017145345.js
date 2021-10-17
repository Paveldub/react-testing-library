import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  // it('should render App component', () => {
  //   render(<App />)
  //   expect(screen.queryByText(/search for react/i)).toBeNull()
  // })
  it('should get async user', async () => {
    render(<App />)
    expect(await screen.findByText(/logged in as/i)).toBeInTheDocument()
  })
})