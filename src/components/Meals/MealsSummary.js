import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Pizza, Delivered To You</h2>
      <p>
        Choose your favorite pizza from our broad selection of available pizza's
        and enjoy a delicious pizza at home.
      </p>
      <p>
        All our pizza are made with high-quality ingredients, just-in-time and
        of course by experienced pizza-chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
