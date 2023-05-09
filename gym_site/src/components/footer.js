import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#317af7', // light blue background color
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',

  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  icon: {
    margin: theme.spacing(0, 2),
    fontSize: '1.2rem',
    color: '#121314',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: '#edf1f5',
    },
  },
  address: {
    marginTop: theme.spacing(2),
    fontSize: '0.9rem',
    color: '#121314',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Paper className={classes.footer} elevation={0}>
      <p>© 2023 AKASH. All rights reserved.</p>
      <div className={classes.socialIcons}>
        <FaFacebook className={classes.icon} />
        <FaTwitter className={classes.icon} />
        <FaLinkedin className={classes.icon} />
      </div>
      <p className={classes.address}>
        FAST, Faisal Town, Lahore, Pakistan
      </p>
    </Paper>
  );
}

export default Footer;
