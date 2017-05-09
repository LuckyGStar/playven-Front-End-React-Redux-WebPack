/** **************************************
*     Export api functions.             *
* Kept separate to have code integrity  *
****************************************/

export { update } from '../../../api/auth-api'
export { getUserReservations, getUserSubscriptions } from '../../../api/profile-api'


// ------------------------------------
// Constants
// ------------------------------------

export const ON_CLICK_NAVIGATION_ITEM = 'ON_CLICK_NAVIGATION_ITEM'
export const ON_CLICK_NAVIGATION_OPTION = 'ON_CLICK_NAVIGATION_OPTION'
export const ON_SUBMIT_PROFILE_FORM = 'ON_SUBMIT_PROFILE_FORM'
export const ON_SUBMITTED_PROFILE_FORM = 'ON_SUBMITTED_PROFILE_FORM'
export const ON_SUBMIT_PROFILE_FORM_SUCCESS = 'ON_SUBMIT_PROFILE_FORM_SUCCESS'

export const ON_GET_USER_SUBSCRIPTION_SUCCESS = 'ON_GET_USER_SUBSCRIPTION_SUCCESS'
export const ON_GET_USER_SUBSCRIPTION_FAIL = 'ON_GET_USER_SUBSCRIPTION_FAIL'
export const ON_GET_USER_RESERVATION_SUCCESS = 'ON_GET_USER_RESERVATION_SUCCESS'
export const ON_GET_USER_RESERAVTION_FAIL = 'ON_GET_USER_RESERVATION_FAIL'


// ------------------------------------
// Actions
// ------------------------------------

export const onClickNavigationItem = item => ({
  type: ON_CLICK_NAVIGATION_ITEM,
  item
})

export const onClickNavigationOption = item => ({
  type: ON_CLICK_NAVIGATION_OPTION,
  item
})

export const getUserReservationsSuccess = payload => ({
  type: ON_GET_USER_RESERVATION_SUCCESS,
  payload
})

export const getUserReservationsFail = payload => ({
  type: ON_GET_USER_SUBSCRIPTION_FAIL,
  payload
})

export const getUserSubscriptionsSuccess = payload => ({
  type: ON_GET_USER_SUBSCRIPTION_SUCCESS,
  payload
})

// TODO : Handle this
export const getUserSubscriptionsFail = payload => ({
  type: ON_GET_USER_SUBSCRIPTION_FAIL,
  payload
})


// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  ON_CLICK_NAVIGATION_OPTION: (state, action) => ({
    ...state,
    filter: action.item
  }),
  ON_CLICK_NAVIGATION_ITEM: (state, action) => ({
    ...state,
    active: action.item,
    filter: `future_${action.item}`
  }),
  ON_GET_USER_SUBSCRIPTION_SUCCESS: (state, action) => ({
    ...state,
    content: action.payload
  }),
  ON_GET_USER_RESERVATION_SUCCESS: (state, action) => ({
    ...state,
    content: action.payload
  })
}

// ------------------------------------
// Reducer ** Initial values
// ------------------------------------

const initialState = {
  active: 'reservations',
  formSubmitting: false,
  filter: 'future_reservations',
  content: []

}


export default function profileReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
