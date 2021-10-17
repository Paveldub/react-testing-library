import { render } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it('should render component', () => {
    render(<App />)
    screen.debug()
  })
})