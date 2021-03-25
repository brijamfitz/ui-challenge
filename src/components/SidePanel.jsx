import React from 'react';
import { createUseStyles } from 'react-jss';
import Logo from './Logo';

const useStyles = createUseStyles({
  sidePanelWrapper: {
    backgroundImage: 'linear-gradient(#F857A6, #FF5858)',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    color: '#FFFFFF',
    maxWidth: 400,
    '@media (max-width: 680px)': {
      display: 'none'
    }
  },
  companyMission: {
    alignContent: 'center',
    padding: 40
  },
  missionText: {
    paddingBottom: 40,
    fontSize: 36,
    lineHeight: 1,
    fontWeight: 800
  },
  topBoxContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  topBox: {
    width: 40,
    height: 40,
    borderLeft: [
      [10, 'solid', 'rgba(255, 255, 255, .5)']
    ],
    borderBottom: [
      [10, 'solid', 'rgba(255, 255, 255, .5)']
    ],
  },
  bottomBoxContainer: {
    width: '100%',
    display: 'flex',
  },
  bottomBox: {
    width: 100,
    height: 100,
    borderTop: [
      [20, 'solid', 'rgba(255, 255, 255, .5)']
    ],
    borderRight: [
      [20, 'solid', 'rgba(255, 255, 255, .5)']
    ],
  },
})

const SidePanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidePanelWrapper}>
      <div className={classes.topBoxContainer}>
        <div className={classes.topBox}></div>
      </div>

      <div className={classes.companyMission}>
        <Logo companyName="ACME" />
        <div className={classes.missionText}>Sign in and start saving your time today.</div>
        <div className={classes.supportText}>We provide 24/7 support with our dedicated professional team.</div>
      </div>

      <div className={classes.bottomBoxContainer}>
        <div className={classes.bottomBox}></div>
      </div>
    </div>
  )
}

export default SidePanel;
