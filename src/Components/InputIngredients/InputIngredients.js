import "./InputIngredients.scss"


function InputIngredients({onSubmitHandler}) {
  return (
    <form onSubmit={onSubmitHandler} className="input__container">
      <span className="input"> 
        <input className="input__text" name="ingredients" type="text" placeholder="Ingredients" wrap="hard"></input>
      
      </span>
      <button type="submit" className="button"> search </button>
    </form>
  );
}

export default InputIngredients;