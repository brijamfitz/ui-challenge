import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  buttonWrapper: {
    '& button': {
      backgroundImage: 'linear-gradient(to right, #F857A6, #FF5858)',
      width: 250,
      height: 40,
      borderRadius: 5,
      border: [
        [1, 'solid']
      ],
      fontWeight: 800,
      color: '#FFFFFF',
      marginBottom: 20
    }
  }
})

const Button = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonWrapper}>
      <button type={props.type} disabled={props.disabled}>{props.title.toUpperCase()}</button>
    </div>
    
  )
}

export default Button;
