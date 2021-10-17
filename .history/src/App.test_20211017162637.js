import userEvent from '@testing-library/user-event'
import axios from 'axios'
import App, { URL } from './App'
const { render } = require("@testing-library/react")

jest.mock('axios')

const hits = [
  {
    objectID: "1", 
    title: "Angular"
  },
  {
    objectID: "2", 
    title: "React"
  },
]

describe('App', () => {
  it('fetches news from an API', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({data: {hits}}))
    const {getByRole, findAllByRole} = render(<App />)
    userEvent.click(getByRole('button'))
    const items = await findAllByRole('listitem')
    expect(items).toHaveLength(2)
    // additional
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(`${URL}?query=React`)
  })

  it('fetches news from an API and reject', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()))
    const {getByRole, findByText} = render(<App />)
    userEvent.click(getByRole('button'))
    const message = await findByText(/Somethin went wrong/i)
    expect(message).toBeInTheDocument(0)
  })
})