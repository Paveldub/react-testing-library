import axios from 'axios'
import App from './App'
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
    axios.
  })
})