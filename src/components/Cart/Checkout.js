import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFourChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
    phone: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const phoneInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFourChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPhoneIsValid = !isEmpty(enteredPhone);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
      phone: enteredPhoneIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid &&
      enteredPhoneIsValid;

    if (!formIsValid) {
      return;
    }

    // submit cart data
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  const nameControlClass = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;

  const streetControlClass = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;

  const postalControlClass = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const cityControlClass = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const phoneControlClass = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClass}>
        <label htmlFor="name">Naam:</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Je bent je naam vergeten!</p>}
      </div>
      <div className={streetControlClass}>
        <label htmlFor="street">Straat en huisnummer</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Je bent je adres vergeten!</p>}
      </div>
      <div className={postalControlClass}>
        <label htmlFor="postal">Postcode:</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && <p>Je bent je postcode vergeten!</p>}
      </div>
      <div className={cityControlClass}>
        <label htmlFor="city">Stad</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Stad niet ingevuld!</p>}
      </div>
      <div className={phoneControlClass}>
        <label htmlFor="phone">Telefoon nummer:</label>
        <input type="numbers" id="phone" ref={phoneInputRef} />
        {!formInputsValidity.phone && (
          <p>Je bent je telefoon nummer vergeten!</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Annuleren
        </button>
        <button className={classes.submit}>Bestel</button>
      </div>
    </form>
  );
};

export default Checkout;
