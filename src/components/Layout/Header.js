import React, { Fragment } from 'react';
import mealsImage from '../../assets/pizza1.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1
          className={classes.pizzalogo}
          onClick={() => {
            console.log('test');
          }}
        >
          PizzaDiMario
        </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Pizzzaaa time!!" />
      </div>
    </Fragment>
  );
};

export default Header;
