import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  inputWrapper: {
    '& input': {
      background: '#F7F4F5',
      width: 250,
      height: 45,
      borderRadius: 5,
      borderColor: '#C9C0C0',
      border: [
        [1, 'solid']
      ],
      padding: 10,
      marginBottom: 20,
      outline: 'none'
    }
  }
})

const TextField = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.inputWrapper}>
      <input id={props.id} type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value || ''} disabled={props.disabled}></input>
    </div>
  )
}

export default TextField;
