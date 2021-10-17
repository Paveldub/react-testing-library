import userEvent from '@testing-library/user-event'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
const { render } = require("@testing-library/react")

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
document.body.appendChild(modalRoot)

const Modal = ({ onClose, children }) => {
  const el = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(el)
    return () => modalRoot.removeChild(el)
  })

  return createPortal(
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

describe('Portal', () => {
  it('modal shows children and a close button', () => {
    const handleClose = jest.fn();
    
    const { getByText } = render(
      <Modal onClose={handleClose}>
        <div>My portal</div>
      </Modal>
    );
    
    expect(getByText("My portal")).toBeInTheDocument();
    userEvent.click(getByText(/Close/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
})