import { render } from '@testing-library/jest-dom'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import App from './App'

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
document.body.appendChild(modalRoot)

const Modal = ({onClose, children}) => {
  const el = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(el)
    return () => modalRoot.removeChild(el)
  })

  return createPortal(
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}></button>
      </div>
    </div>
  )
}

describe('App', () => {
  it('modal portal', () => {
    render(<App />)
  })
})