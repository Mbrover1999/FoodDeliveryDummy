import classes from './MealItemForm.module.css'

const MealItemForm = props => {
  return  <form className={classes.form}>
      <input type="text"/>
      <button>הוסף להזמנה</button>
  </form>
};

export default MealItemForm;
