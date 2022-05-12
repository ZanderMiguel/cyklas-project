import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Google from '../assets/Rectangle 134.svg';
import Button from '../components/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SelectUserType from '../Form_content/SelectUsertype';
function GoogleAuth() {
  const history = useHistory();
  const [state, setState] = React.useState(false);
  const googleData = React.useRef(null);

  const signIn = (googleAuth) => {
    axios
      .post('https://murmuring-basin-16459.herokuapp.com/register', googleAuth)
      .then((response) => {
        console.log(response.data.emailAddress);
        if (response.data.existing) {
          axios
            .post('https://murmuring-basin-16459.herokuapp.com/login', {
              token: response.data.token,
              ...googleAuth,
            })
            .then((res) => {
              console.log('Google login success', res.data);
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('userData', JSON.stringify(res.data));
              history.push('/dashboard');
            })
            .catch((err) => console.log(err));
        }
        if (response.data.existing === false) {
          setState(true);
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const googleSuccess = async (res) => {
    const googleAuth = {
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      emailAddress: res.profileObj.email,
      image: res.profileObj.imageUrl,
    };
    googleData.current = googleAuth;
    signIn(googleAuth);
  };
  const googleFailure = (error) => {
    console.log('error');
  };

  return (
    <div>
      <GoogleLogin
        clientId="13670802182-jvq0ldcdghpq85qgr1pu15uh4v74o082.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            variant="outlined"
            content="continue with google"
            startIcon={<img src={Google} alt="Google Icon" />}
            color="#007FFF"
            borderColor="#007FFF"
            fullWidth
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          />
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy={'single_host_origin'}
      />
      {state && (
        <SelectUserType
          open={state}
          close={() => setState(false)}
          signIn={signIn}
          googleData={googleData}
        />
      )}
    </div>
  );
}

export default GoogleAuth;
