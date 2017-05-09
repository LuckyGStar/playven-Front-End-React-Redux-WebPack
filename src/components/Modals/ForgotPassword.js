import React from 'react'
import { connectModal } from 'redux-modal'
import { Button, Modal } from 'react-bootstrap'
import ForgotPasswordForm from 'forms/forgotpassword'

const handleHide = () => {

}

export class ForgotPassword extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {}

  handlePasswordRequest() {

  }

  renderCloseIcon (handleHide) {
    return (
      <button className='close' onClick={ handleHide }>
            <span>
            <i className="modal__close"/>
          </span>
      </button>
    )
  }

  renderModalLogo () {
    return (
      <div className="modal__header modal__header_login">
        <div className="modal__logo"></div>
      </div>
    )
  }

  render() {
    const { show, handleHide, forgotPassword, onSuccess, isResetPassword } = this.props

    return (
      <Modal
        show={ show }
        onHide={ handleHide }
        backdrop={ true }
        className="modal_dark modal_center"
        dialogClassName="modal-background-fix">
        <div className="modal__container">
          { this.renderCloseIcon(handleHide) }
          { this.renderModalLogo() }
          <div className="modal__content">
            <ForgotPasswordForm onSubmit={credentials => {forgotPassword(credentials)}} buttonState={isResetPassword}/>
          </div>
        </div>
      </Modal>
    )
  }
}

export default connectModal({
  name: 'forgotpassword'
})(ForgotPassword)

