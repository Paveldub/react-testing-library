import App from './App';
const { render, screen, fireEvent, act} = require("@testing-library/react")



describe("App", () => {
  // it('should render App component', () => {
  //   render(<App />)
  //   expect(screen.queryByText(/search for react/i)).toBeNull()
  // })
  // it('should get async user', async () => {
  //   render(<App />)
  //   expect(await screen.findByText(/logged in as/i)).toBeInTheDocument()
  // })

  test('should render App component', async () => {
    render(<App />)
    screen.debug()

    await screen.findByText(/logged in as/i)
    expect(screen.queryByText(/Searches for React/i)).toBeNull()

    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: 'React'},
    })
   
    screen.debug()
    expect(screen.queryByText(/Searches for React/i)).toBeInTheDocument()
  })
})

describe('check clicks', () => {
  it('checkbox click', () => {
    const handleChange = jest.fn();

    const {container} = render(<input type="checkbox" onChange={handleChange} />)
    
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked()
  })
})