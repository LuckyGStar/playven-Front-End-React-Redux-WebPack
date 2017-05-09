import React, { Component, PropTypes } from 'react';
import VenueCard from './VenueCard'
import EditInformation from '../containers/EditInformationContainer'
import Fa from 'react-fontawesome'
import Text from '../../../containers/Text'

class Content extends Component {
  componentDidMount() {
    console.log("started to download data")
    this.props.getData()
    console.log("downloaded data")
  }
  // Update only on option change, not on nav item change
  componentDidUpdate(prevProps) {
    // const diffActive = this.props.active !== prevProps.active
    const diffOption = this.props.active !== prevProps.active

    if (diffOption) {
      this.renderElements(this.props.content)
    }
  }

  renderElements(content) {
    const { filter } = this.props
    if (content[filter]) {
      if (content[filter].length === 0) {
        return(<h2></h2>)
        return(<h3><Text text="pages.profile.no_results" /></h3>)
      } else {
        return (
          content[filter].map((value, i) => <VenueCard data={value} key={i} />)
        )
      }
    } else {
      return(
        <div style={{width: '0%', margin: 'auto', paddingTop: '12rem'}}>
          <Fa className={'loading'}
              name="refresh"
              spin={true}
              size='5x'
              style={{ color: '#0e7dff' }} />
        </div>
      )
    }
  }


  render() {
    const { active, content, filter, update, userId } = this.props

    switch (active) {
      case 'edit':
        return <EditInformation onSubmit={(credentials)=>{update(credentials, userId)}}/>
      default:
        return (
          <div className="max-width">
            { this.renderElements(content) }
          </div>)
    }
  }
}

Content.propTypes = {
  active: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

export default Content;
