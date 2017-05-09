import React, { Component } from 'react';

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || "445975675792404";

class FacebookButton extends Component {
  componentDidMount() {
    this.injectSDK()
  }

  injectSDK = () => {
    const id = 'facebook-jssdk';
    if (document.getElementById(id)) {
      return;
    }

    window.fbAsyncInit = () => {
      FB.init({
        appId: FACEBOOK_APP_ID,
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: false, // parse social plugins on this page,
        version: 'v2.6',
      });
    }

    const script = document.createElement('script');
    script.id = id;
    script.src = "//connect.facebook.net/en_US/sdk.js";

    document.getElementsByTagName("head")[0].appendChild(script);
  }

  handleAuth = (onSuccess) => {
    return () => {
      FB.getLoginStatus((response) => {
        if (response.authResponse) {
          onSuccess(response.authResponse);
        } else {

          FB.login((response) => {
            if (response.authResponse) {
              onSuccess(response.authResponse);
            }
          }, {
            scope: 'email,public_profile',
            return_scopes: true
          });
        }
      });
    }
  }

  render() {
    const { onAuth, ...rest } = this.props;

    if (typeof rest.children === 'function') {
      return rest.children({
        onClick: this.handleAuth(onAuth),
      });
    }

    return (
      <button {...rest} onClick={this.handleAuth(onAuth)} />
    );
  }
}

export default FacebookButton
