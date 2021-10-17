import { render } from '@testing-library/jest-dom'
import App from './App'

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
document.body.appendChild(modalRoot)

describe('App', () => {
  it('modal portal', () => {
    render(<App />)
  })
})