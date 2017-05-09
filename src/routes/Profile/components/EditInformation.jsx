import React from 'react';
import {Field, initialize, reduxForm} from 'redux-form'
import ReactLadda, { SLIDE_UP } from 'react-ladda'

// TODO onChange is not updating correctly, FIX!

class EditInformation extends React.Component {
  constructor (props) {
    super (props)
  }

  componentDidMount () {
    this.handleInitialize();
  }

  handleInitialize () {
    const initData = {
      "first_name": this.props.user.first_name,
      "last_name": this.props.user.last_name,
      "email": this.props.user.email,
      "phone_number": this.props.user.phone_number,
      "street_address": this.props.user.street_address,
      "zipcode": this.props.user.zipcode,
      "city": this.props.user.city,



    }
    this.props.initialize(initData)
  }

  render () {
    const { formSubmitting, handleSubmit, pristine, submitting, isEditingProfile } = this.props

    return (
      <div className='edit-information max-width'>
        <form onSubmit={handleSubmit}>
          <div className='color-bg-white pas pam-tablet pal-desktop mbl'>
            <div className='edit-information__section'>
              <h4 className='edit-information__section-title'>
                Muokkaa tietojasi
              </h4>
              <div className='t5'>
                muokattu viimeksi 04/11/2016
              </div>
            </div>

            <div className='flex-row flex-col-mobile'>
              <Field type='text'
                     name='first_name'
                     className='input-text flex'
                     placeholder='Etunimi'
                     component="input"
              />
              <Field type='text'
                     name='last_name'
                     className='input-text flex'
                     placeholder='Sukunimi'
                     component="input"
              />
            </div>

            <div className='flex-row flex-col-mobile'>
              <Field type='email'
                     className='input-text flex'
                     name='email'
                     placeholder='Sähköposti'
                     component="input"
              />
              <Field type='text'
                     className='input-text flex'
                     name='phone_number'
                     placeholder='Puhelin'
                     component="input"
              />
            </div>

            <div className='flex-row flex-col-mobile'>
              <Field type='text'
                     className='input-text flex'
                     name='street_address'
                     placeholder='Katuosoite'
                     component="input"
              />
              <Field type='text'
                     className='input-text flex'
                     name='zipcode'
                     placeholder='Postinumero'
                     component="input"
              />
            </div>

            <div className='flex-row flex-col-mobile'>
              <Field type='text'
                     name='city'
                     className='input-text flex'
                     placeholder='Kaupunki'
                     component="input"
              />
              <div className='flex ptm mht'>
                <button className='pl-btn-grey mtt'
                        style={ {position: 'relative', top: '-27px'} }>
                  <i className='fa fa-plus'/> Vaihda salasana
                </button>
              </div>
            </div>

            <div className='mtm'>
              <div className='edit-information__section'>
                <h4 className='edit-information__section-title'>
                  Maksutapa
                </h4>
              </div>

              <div className='flex-row'>
                <div className='loadedContent'/>
                <div className='flex'>
                  <select className='form-control select2-hidden-accessible'
                          name='card'
                          tabIndex='-1'
                          aria-hidden='true'>
                    <option disabled>Korttisi</option>
                  </select>
                  <span className='select2 select2-container select2-container--default'
                        dir='ltr'
                        style={ {width: 402} }>
                <span className='selection'>
                  <span className='select2-selection select2-selection--single'
                        role='combobox'
                        tabIndex={ 0 }
                        aria-haspopup='true'
                        aria-expanded='false'
                        aria-labelledby='select2-card-rv-container'>
                    <span className='select2-selection__rendered' id='select2-card-rv-container'/>
                    <span className='select2-selection__arrow' role='presentation'>
                      <b role='presentation'/>
                    </span>
                  </span>
                </span>
                <span className='dropdown-wrapper' aria-hidden='true'/>
              </span>
                </div>
                <div className='flex'>
                  <button className='pl-btn-grey'>
                    Lisää uusi
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex-row flex-hc'>
            <ReactLadda
              type="submit"
              className="pl-btn-primary"
              disabled={pristine || submitting}
              data-style={SLIDE_UP}
              loading={isEditingProfile}>
              {formSubmitting ? <i className='fa fa-refresh fa-spin fa-1x fa-fw'/> : <span>Tallenna muutokset</span>}
            </ReactLadda>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'editinformation'  // a unique identifier for this form
})(EditInformation)
