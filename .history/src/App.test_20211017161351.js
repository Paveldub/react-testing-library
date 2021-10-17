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

describe('should render async data', async () => {
  render(<App />)
})