import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  logoWrapper: {
    display: 'flex',
    marginBottom: 40,
    alignItems: 'center'
  },
  box: {
    backgroundImage: 'linear-gradient(to right, #FFFFFF, #C9C0C0)',
    width: 30,
    height: 30,
    borderRadius: 3,
    marginRight: 10
  },
  companyName: {
    fontSize: 20,
    fontWeight: 800
  }
})

const Logo = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.logoWrapper}>
      <div className={classes.box}></div>
      <div className={classes.companyName}>{props.companyName}</div>
    </div>
  )
}

export default Logo;
