import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/api/auth-api'
import * as types from '../../src/actions/action-types'
import { hide, show } from 'redux-modal'
import moxios from 'moxios'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('auth api', () => {
  it('creates LOGIN_SUCCESS when user is authenticated successfully', () => {
    const email = 'tido.jackson@example.com';
    const password = '123123123';
    const onSuccess = 'payment';
    const user = {
      city: "",
      email: "test@test.com",
      exp: 1484335965,
      first_name: "test@test.com",
      id: 890,
      image: null,
      last_name: "test@test.com",
      outstanding_balance: 0,
      phone_number: "",
      provider: null,
      street_address: "wk",
      stripe_id: "cus_9ggQurFDuYVdsY",
      uid: null,
      zipcode: ""
    }

    const expectedActions = [
      { type: types.LOGIN_SUCCESS, user },
      hide('login'),
      show(onSuccess)
    ]
    const store = mockStore({ user: {} })

    store.dispatch(actions.login({ credentials: { email, password }, onSuccess }))

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          auth_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODkwLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJmaXJzdF9uYW1lIjoidGVzdEB0ZXN0LmNvbSIsImxhc3RfbmFtZSI6InRlc3RAdGVzdC5jb20iLCJwcm92aWRlciI6bnVsbCwidWlkIjpudWxsLCJpbWFnZSI6bnVsbCwicGhvbmVfbnVtYmVyIjoiIiwic3RyaXBlX2lkIjoiY3VzXzlnZ1F1ckZEdVlWZHNZIiwic3RyZWV0X2FkZHJlc3MiOiJ3ayIsInppcGNvZGUiOiIiLCJjaXR5IjoiIiwib3V0c3RhbmRpbmdfYmFsYW5jZSI6MC4wLCJleHAiOjE0ODQzMzU5NjV9.uiK_8EN-AxS54SbSCqo3FFm7qykuD0y-uM8sLL738hc"
        }
      }).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
    })
  })

  it('creates REGISTER_SUCCESS when user is registred successfully', () => {
    const email = 'tido.jackson@example.com';
    const first_name = 'tido';
    const last_name = 'jackson';
    const password = '123123123';
    const onSuccess = 'payment';
    const user = {
      city: "",
      email: "test@test.com",
      exp: 1484335965,
      first_name: "test@test.com",
      id: 890,
      image: null,
      last_name: "test@test.com",
      outstanding_balance: 0,
      phone_number: "",
      provider: null,
      street_address: "wk",
      stripe_id: "cus_9ggQurFDuYVdsY",
      uid: null,
      zipcode: ""
    }

    const expectedActions = [
      { type: types.REGISTER_SUCCESS, user },
      hide('register'),
      show(onSuccess)
    ]
    const store = mockStore({ user: {} })

    store.dispatch(actions.register({ credentials: { email, password, first_name, last_name, password_confirmation: password }, onSuccess }))

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          auth_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODkwLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJmaXJzdF9uYW1lIjoidGVzdEB0ZXN0LmNvbSIsImxhc3RfbmFtZSI6InRlc3RAdGVzdC5jb20iLCJwcm92aWRlciI6bnVsbCwidWlkIjpudWxsLCJpbWFnZSI6bnVsbCwicGhvbmVfbnVtYmVyIjoiIiwic3RyaXBlX2lkIjoiY3VzXzlnZ1F1ckZEdVlWZHNZIiwic3RyZWV0X2FkZHJlc3MiOiJ3ayIsInppcGNvZGUiOiIiLCJjaXR5IjoiIiwib3V0c3RhbmRpbmdfYmFsYW5jZSI6MC4wLCJleHAiOjE0ODQzMzU5NjV9.uiK_8EN-AxS54SbSCqo3FFm7qykuD0y-uM8sLL738hc"
        }
      }).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
    })
  })

  it('creates LOG_OUT when user click logout', () => {
    const expectedActions = [{ type: types.LOG_OUT }];
    const store = mockStore({ user: {} });
    store.dispatch(actions.logout())
    expect(store.getActions()).to.deep.equal(expectedActions)
  })
})
