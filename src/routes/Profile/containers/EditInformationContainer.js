import { connect } from 'react-redux'
import EditInformation from '../components/EditInformation'

const mapStateToProps = (state) => ({
  user: state.auth.user,
  formSubmitting: state.profile.formSubmitting,
  isEditingProfile: state.auth.isRequestingToEditProfile
})
//TODO: Fix onSubmit url/access
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditInformation)
