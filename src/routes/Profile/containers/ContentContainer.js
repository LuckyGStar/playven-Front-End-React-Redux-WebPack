import { connect } from 'react-redux'
import Content from '../components/Content'
import * as actions from '../modules/profile'
import { update } from '../../../api/auth-api'

const mapStateToProps = state => ({
  active: state.profile.active,
  filter: state.profile.filter,
  content: state.profile.content,
  userId: state.auth.user.id
})

const mapDispatchToProps = {
  getData: actions.getUserReservations,
  update
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
