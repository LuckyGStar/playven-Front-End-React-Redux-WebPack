import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Text from '../containers/Text'
import LaddaButton, { SLIDE_UP } from 'react-ladda'

const ForgotPasswordForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, buttonState } = props
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <h2 id="whitetext"> Forgot your password?</h2>
      </fieldset>

      <fieldset className="form-group">
        <Field name="email" component="input" type="email" placeholder="Email" className="form-control" />
      </fieldset>

      <fieldset className="form-group form-group_btns">
        <LaddaButton
          data-style={SLIDE_UP}
          loading={buttonState}
          type="submit"
          disabled={pristine || submitting}
          className="btn btn-primary btn-block">
          Send me reset password instructions'
        </LaddaButton>
      </fieldset>
    </form>
  )
}

export default reduxForm({
  form: 'forgotpassword'  // a unique identifier for this form
})(ForgotPasswordForm)
