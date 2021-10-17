import App from './App';
const { render, screen, fireEvent} = require("@testing-library/react")

describe("App", () => {
  // it('should render App component', () => {
  //   render(<App />)
  //   expect(screen.queryByText(/search for react/i)).toBeNull()
  // })
  // it('should get async user', async () => {
  //   render(<App />)
  //   expect(await screen.findByText(/logged in as/i)).toBeInTheDocument()
  // })

  test('should render App component', () => {
    render(<App />)
    screen.debug()
    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: React},
    })
    screen.debug()
  })


})