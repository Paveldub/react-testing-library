import App from './App'
import axios from 'axios'
const { render } = require("@testing-library/react")

jest.mock('axios')

describe('should render async data', async () => {
  render(<App />)
})