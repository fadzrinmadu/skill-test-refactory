import './style.css';
import React from 'react';
import RefactoryLogo from '../../assets/images/refactory-logo-big.png';
import GoogleLogo from '../../assets/images/google-logo.svg';
import FacebookLogo from '../../assets/images/facebook-logo.svg';

const ROOT_API = process.env.REACT_APP_ROOT_API;

function LoginForm() {
  const actionGoogleLogin = () => {
    window.open(`${ROOT_API}/auth/google`, '_self');
  };

  const actionFacebookLogin = () => {
    window.open(`${ROOT_API}/auth/facebook`, '_self');
  };

  return (
    <>
      <div className="container">
        <div className="big-logo">
          <img src={RefactoryLogo} alt="Refactory Logo" width={200} />
        </div>
        <form className="form">
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input" type="text" id="email" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-input" type="password" id="password" />
          </div>
          <button className="form-button" type="button">Masuk</button>
        </form>
        <div className="oauth-login">
          <p>Atau masuk dengan</p>
          <button
            className="oauth-login-button google-login-button"
            type="button"
            onClick={actionGoogleLogin}
          >
            <img src={GoogleLogo} alt="Google Logo" width={32} />
          </button>
          <button
            className="oauth-login-button facebook-login-button"
            type="button"
            onClick={actionFacebookLogin}
          >
            <img src={FacebookLogo} alt="Facebook Logo" width={32} />
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
