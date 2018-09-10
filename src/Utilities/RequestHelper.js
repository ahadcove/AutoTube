import axios from "axios";
import store from '../store';
import "../globals";

const getHeaders = () => {
  return {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };
}

export const GET = (endpoint, body = {}, rootUrl = global.YOUTUBE_ROOT) => {
  return new Promise((resolve, reject) => {
    axios.get(`${rootUrl}/${endpoint}`, getHeaders())
      .then(res => resolve(res))
      // .catch(err => reject(handleError(err)))
      .catch(err => reject(err))
  })
}

export const POST = (endpoint, body = {}, headers = getHeaders(), rootUrl = global.YOUTUBE_ROOT) => {
  return new Promise((resolve, reject) => {
    axios.post(`${rootUrl}/${endpoint}`, body, headers)
      .then(res => resolve(res))
      // .catch(err => reject(handleError(err)))
      .catch(err => reject(err))
  })
}

const handleError = (error) => {
  const { status, message } = error;
  switch (status) {
    
    case 401:
      // axios.post(`https://www.googleapis.com/oauth2/v4/token?refresh_token=${store.getState().auth.tubeOAuth.refreshToken}&client_id=${process.env.REACT_APP_TUBE_CLIENT_ID}&client_secret=${process.env.REACT_APP_TUBE_CLIENT_SECRET}&grant_type=refresh_token`)
      axios.post(`https://www.googleapis.com/oauth2/v4/token?refresh_token=${store.getState().refreshToken}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=refresh_token`)
        .then(res => {
          console.log('Refresh token', res);
          if (res.data && res.data.access_token) {
            // store.dispatch(refreshTubeTokens(tubeOAuth));
            store.commit("ADD_TOKEN", { token: res.data.access_token, refreshToken: res.data.refresh_token } );
            resolve();
          } else {
            reject('Couldn\'t refresh access token');
          }
        }).catch(reject)
    // do something when you're unauthenticated
    case 403:
    // do something when you're unauthorized to access a resource
    case 500:
    // do something when your server exploded
    default:
    // handle normal errors with some alert or whatever
  }
  // if (err.response.status == 401) {
  //   if (this.token) {
  //     this.emitError(
  //       "Sign in expired. Need to re authenticate before getting subscriptions"
  //     );
  //   } else {
  //     this.emitError(
  //       "Need to authenticate before getting subscriptions"
  //     );
  //   }
  //   this.$router.push("auth");
  // }
  // console.log("recursiveSubscription First Page Error", err.response);
  return message; // I like to get my error message back
}