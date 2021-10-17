import userEvent from '@testing-library/user-event'
import App from './App'
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

  test('should render App component', async () => {
    render(<App />)
    screen.debug()

    await screen.findByText(/logged in as/i)
    expect(screen.queryByText(/Searches for React/i)).toBeNull()

    // fireEvent.change(screen.getByRole('textbox'), {
    //   target: {value: 'React'},
    // })

    userEvent.type(screen.getByRole('textbox'), 'React')
   
    screen.debug()
    expect(screen.queryByText(/Searches for React/i)).toBeInTheDocument()
  })
})

describe('check clicks', () => {
  it('checkbox click', () => {
    const handleChange = jest.fn();
    const {container} = render(  <input type="checkbox" onChange={handleChange} />)
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalled()
    expect(checkbox).toBeChecked()
  })

  it('input focus', () => {
    const { getByTestId } = render(<input type="text" data-testid="simple-input" />)
    const input = getByTestId('simple-input')
    expect(input).not.toHaveFocus()
    input.focus()
    expect(input).toHaveFocus()
  })

  it('check double click', () => {
    const onChange = jest.fn();
    const {container} = render(  <input type="checkbox" onChange={onChange} />)
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked()
    userEvent.dblClick(checkbox)
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  it('focus', () => {
    const {getAllTestId} = render(
      <div>
        <input data-testId="element" type="checkbox" />
        <input data-testId="element" type="checkbox" />
        <input data-testId="element" type="checkbox" />
      </div>
    )
 
  })
})