import React, { useEffect, useReducer } from 'react';
import { useStore } from '../store/StoreContext';
import { setUser, setPasswordReset } from '../store/appReducer';
import { fakeSignIn, resetPassword } from '../utils/helpers';
import { createUseStyles } from 'react-jss';
import SidePanel from '../components/SidePanel';
import Button from '../components/Button';
import TextField from '../components/TextField';
import ToastNotification from '../components/ToastNotification';
import Footer from '../components/Footer';

const useStyles = createUseStyles({
  signInWrapper: {
    display: 'flex',
    height: '100%',
    margin: '0 auto',
    color: '#403E45'
  },
  signInPanel: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 3,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 300,
    margin: '0 auto'
  },
  signInContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  divider: {
    width: 100,
    height: 10,
    background: '#F7F4F5',
    borderRadius: 10,
    marginBottom: 18
  },
  instructions: {
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 18,
    '& button': {
      background: 'none',
      border: 'none',
      outline: 'none',
      margin: 0,
      padding: 0,
      cursor: 'pointer',
      color: '#F857A6',
    }
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    paddingBottom: 20,
    color: '#C9C0C0'
  },
  h1: {
    fontSize: 20,
    fontWeight: 800
  }
})

function signInReducer(state, action) {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'signIn':
      return {
        ...state,
        loading: true,
        error: '',
        signedIn: false
      };
    case 'success':
      return {
        ...state,
        loading: false,
        error: '',
        signedIn: true,
        email: '',
        password: '',
        passwordReset: true
      };
    case 'error':
      return {
        ...state,
        loading: false,
        error: 'Incorrect Email or Password',
        signedIn: false,
        email: '',
        password: ''
      };
    case 'toggleView':
      return {
        ...state,
        toggleView: !state.toggleView,
        error: '',
        email: '',
        password: '',
      }
    case 'resetPassword':
      return {
        ...state,
        loading: true,
        error: '',
        signedIn: false,
        email: '',
        password: '',
        passwordReset: false
      };
    case "reset-password-reset":
      return {
        ...state,
        passwordReset: false,
      };
    default:
      return state;
  }
}

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: '',
  signedIn: false,
  toggleView: false,
  passwordReset: false
};

const SignIn = () => {
  const classes = useStyles();
  const [globalState, globalDispatch] = useStore();
  const [state, dispatch] = useReducer(signInReducer, initialState);
  const {
    email,
    password,
    loading,
    error,
    signedIn,
    toggleView,
    passwordReset
  } = state;
  const user = {email, password}

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      dispatch({type: 'error'});
    } else {
      dispatch({type: 'signIn'});
      try {
        await fakeSignIn({ email, password });
        dispatch({type: 'success'});
        globalDispatch(setUser(user));
      } catch (error) {
        dispatch({type: 'error'});
      }
    }
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();

    if (email === '') {
      dispatch({type: 'error'});
    } else {
      dispatch({type: 'resetPassword'});
      try {
        await resetPassword({email});
        dispatch({type: 'success'});
        dispatch({type: 'toggleView'})
        globalDispatch(setPasswordReset(email));
      } catch (error) {
        dispatch({type: 'error'});
      }
    }
  };

  useEffect(() => {
    if (passwordReset) {
      setTimeout(() => {
        dispatch({type: 'reset-password-reset'});
      }, 5000);
    }
  });

  return (
    <div className={classes.signInWrapper}>
      <div>
        <SidePanel />
      </div>

      <div className={classes.signInPanel}>
        {passwordReset &&
          <ToastNotification
            icon="&#128077;"
            message="Password reset instructions have been sent."
          />
        }

        <div className={classes.signInContent}>
          <h1 className={classes.h1}>{!toggleView ? 'Sign In' : 'Reset Password'}</h1>

          {toggleView &&
            <div className={classes.instructions}>Enter your registered email in order to receive password reset Instructions.</div>
          }

          <div className={classes.divider}></div>

          <form className={classes.signInPanel} onSubmit={(e) => {!toggleView ? handleSignInSubmit(e) : handleResetPasswordSubmit(e)}}>
            <TextField
              type="email"
              placeholder="Email"
              value={email}
              disabled={loading}
              onChange={(e) => dispatch({
                type: 'field',
                field: 'email',
                value: e.target.value
              })}
            />
            
            {!toggleView &&
              <TextField
                type="password"
                placeholder="Password"
                value={password}
                disabled={loading}
                onChange={(e) => dispatch({
                  type: 'field',
                  field: 'password',
                  value: e.target.value
                })}
              />
            }
            
            <Button
              type="submit"
              title={!toggleView ? 'Sign In' : 'Reset Password'}
              disabled={loading}
            />
          </form>

          {loading &&
            <div>Loading...</div>
          }

          {error &&
            <div>{error}</div>
          }

          {signedIn &&
            <div>Success!</div>
          }

          <div className={classes.instructions}>
            {!toggleView
              ? <div>Forgot your password? <button type="button" onClick={() => dispatch({type: 'toggleView'})}>Reset it here.</button></div>
              : <div>Didn’t mean to click that? <button type="button" onClick={() => dispatch({type: 'toggleView'})}>Sign In.</button></div>
            }
          </div>
        </div>

        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default SignIn;