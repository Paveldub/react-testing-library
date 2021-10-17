import { render } from '@testing-library/jest-dom'
import { useEffect } from 'react'
import App from './App'

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
document.body.appendChild(modalRoot)

const Modal = ({onClose, children}) => {
  const el = document.createElement('div')

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])
}

describe('App', () => {
  it('modal portal', () => {
    render(<App />)
  })
})