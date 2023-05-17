import "./InputIngredients.scss"


function InputIngredients({onSubmitHandler}) {
  return (
    <form className="input-ingredients" onSubmit={onSubmitHandler} >
      <span > 
        <textarea className="placeholder" name="ingredients" type="textarea" placeholder="Your ingredients..." wrap="hard"></textarea>
      
      </span>
      <button className="button-search" type="submit"> search </button>
    </form>
  );
}

export default InputIngredients;