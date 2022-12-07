import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Margherita',
    description: 'Tomaat, mozzarella, basilicum',
    price: 11.0,
  },
  {
    id: 'm2',
    name: 'Peperoni',
    description: 'Tomaat, mozzarella, geroosterde paprika, Nduja, rode ui',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Burrata',
    description: 'Tomaat, burrata, coppa di Parma, rucola, tomaatjes',
    price: 17.5,
  },
  {
    id: 'm4',
    name: 'Salame piccante',
    description: 'Tomaat, mozzarella, pittige salami',
    price: 13.75,
  },
  {
    id: 'm5',
    name: 'Napoletana',
    description: 'Tomaat, mozzarella, ansjovis, kappertjes, oregano',
    price: 14.25,
  },
  {
    id: 'm6',
    name: 'Capricciosa',
    description: 'Tomaat, mozzarella, artisjok, ham, champignons, olijven',
    price: 16.0,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
