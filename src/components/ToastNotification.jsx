import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  toastWrapper: {
    backgroundImage: 'linear-gradient(#F857A6, #FF5858)',
    position: 'fixed',
    top: 0,
    right: 0,
    marginTop: 20,
    marginRight: 20,
    alignItems: 'center',
    borderRadius: 3,
    boxShadow: [
      [1, 1, 1, 1, '#C9C0C0']
    ],
  },
  content: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    padding: 10
  },
  message: {
    background: '#FFFFFF',
    padding: 10,
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
  closeButton: {
    background: '#FFFFFF',
    color: '#C9C0C0'
  }
})

const ToastNotification = (props) => {
  const classes = useStyles();
  const [isClosed, setIsClosed] = useState(false);

  return (
    <>
      {!isClosed
        ? <div className={classes.toastWrapper}>
            <div className={classes.content}>
              <div className={classes.icon}>{props.icon}</div>
              <div className={classes.message}>{props.message} <button type="button" onClick={() => setIsClosed(true)}>X</button></div>
            </div>
          </div>
        : <div />
      }
    </>
  )
}

export default ToastNotification;
