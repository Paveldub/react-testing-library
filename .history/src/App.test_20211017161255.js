import App from './App'
const { render } = require("@testing-library/react")

jest.mock('axios')

describe('should render async data', async () => {
  render(<App />)
})