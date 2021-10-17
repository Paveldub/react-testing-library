import userEvent from '@testing-library/user-event'
const { render } = require("@testing-library/react")



describe('Portal', () => {
  it('modal shows children and a close button', () => {
    const handleClose = jest.fn();
    
    const { getByText } = render(
      <Modal onClose={handleClose}>
        <div>My portal</div>
      </Modal>
    );
    
    expect(getByText("My portal")).toBeInTheDocument();
    userEvent.click(getByText(/close/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should be unmounted', () => {
    const {getByText, unmount, queryBytext} = render(
      <Modal>
        <div>My portal</div>
      </Modal>
    );

    expect(getByText("My Portal")).toBeInTheDocument()
    unmount()
    expect(queryBytext("My Portal")).not.toBeInTheDocument()
  })
})