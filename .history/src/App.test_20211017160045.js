// import userEvent from '@testing-library/user-event'
// import App from './App'
// const { render, screen, fireEvent } = require("@testing-library/react")

// describe("App", () => {
//   it('should render App component', () => {
//     render(<App />)
//     expect(screen.queryByText(/search for react/i)).toBeNull()
//   })
//   it('should get async user', async () => {
//     render(<App />)
//     expect(await screen.findByText(/logged in as/i)).toBeInTheDocument()
//   })

//   test('should render App component', async () => {
//     render(<App />)
//     screen.debug()

//     await screen.findByText(/logged in as/i)
//     expect(screen.queryByText(/Searches for React/i)).toBeNull()

//     // fireEvent.change(screen.getByRole('textbox'), {
//     //   target: {value: 'React'},
//     // })

//     // better to use USEREVENT than FIREVENT !!!
//     userEvent.type(screen.getByRole('textbox'), 'React')
   
//     screen.debug()
//     expect(screen.queryByText(/Searches for React/i)).toBeInTheDocument()
//   })
// })

// describe('check clicks', () => {
//   it('checkbox click', () => {
//     const handleChange = jest.fn();
//     const {container} = render(  <input type="checkbox" onChange={handleChange} />)
//     const checkbox = container.firstChild;
//     expect(checkbox).not.toBeChecked()
//     fireEvent.click(checkbox) // simple fireEvent
//     expect(handleChange).toHaveBeenCalled()
//     expect(checkbox).toBeChecked()
//   })

//   it('input focus', () => {
//     const { getByTestId } = render(<input type="text" data-testid="simple-input" />)
//     const input = getByTestId('simple-input')
//     expect(input).not.toHaveFocus()
//     input.focus()
//     expect(input).toHaveFocus()
//   })

//   it('check double click', () => {
//     const onChange = jest.fn(); // function emulation
//     const {container} = render(  <input type="checkbox" onChange={onChange} />)
//     const checkbox = container.firstChild;
//     expect(checkbox).not.toBeChecked()
//     userEvent.dblClick(checkbox) // double click
//     expect(onChange).toHaveBeenCalledTimes(2)
//   })

//   it('focus', () => {
//     const { getAllByTestId } = render(
//       <div>
//         <input data-testid="element" type="checkbox" />
//         <input data-testid="element" type="radio" />
//         <input data-testid="element" type="number" />
//       </div>
//     )
//     const [checkbox, radio, number] = getAllByTestId('element');
//     userEvent.tab()
//     expect(checkbox).toHaveFocus();
//     userEvent.tab()
//     expect(radio).toHaveFocus();
//     userEvent.tab()
//     expect(number).toHaveFocus();
//   })

//   it('select option', () => {
//     const {getByRole, getByText} = render(
//       <>
//         <select>
//           <option value="1">A</option>
//           <option value="2">B</option>
//           <option value="3">C</option>
//         </select>
//       </>
//     )

//     userEvent.selectOptions(getByRole('combobox'), '1')
//     expect(getByText('A').selected).toBeTruthy()

//     userEvent.selectOptions(getByRole('combobox'), '2')
//     expect(getByText('B').selected).toBeTruthy()
//     expect(getByText("A").selected).toBeFalsy()
    
//     userEvent.selectOptions(getByRole('combobox'), '3')
//     expect(getByText('C').selected).toBeTruthy()
//     expect(getByText('B').selected).toBeFalsy()
//   })
// })