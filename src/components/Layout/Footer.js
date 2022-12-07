import React, { Fragment } from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  const today = new Date().getFullYear();

  return (
    <Fragment>
      <footer className={classes.footer}>
        <h1>PizzaDiMario ©️ {today}</h1>
      </footer>
    </Fragment>
  );
};

export default Footer;
