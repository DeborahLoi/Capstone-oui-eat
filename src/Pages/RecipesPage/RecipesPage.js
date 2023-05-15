import "./RecipesPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import RecipeList from "../../Components/RecipeList/RecipeList";

function RecipesPage() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    if (ingredients.length > 0) {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&app_id=b365bd97&app_key=65a0dbafe39a7b8890499e7a169f7eb6&q=${ingredients
            .map((ingredient) => encodeURIComponent(ingredient))
            .join(",")}`
        )
        .then((response) => {
          const recipeArray = [];
          for (let j = 0; j < 5; j++) {
            const recipe = response.data.hits[j].recipe;
            const title = recipe.label;
            const image = recipe.image;
            const ingredientsText = recipe.ingredients.map(
              (ingredient) => ingredient.text
            );
            const recipeObj = {
              title,
              image,
              ingredients: ingredientsText,
            };
            recipeArray.push(recipeObj);
          }
          setRecipeList(recipeArray);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [ingredients]);

  function onCheck(event) {
    event.preventDefault();
    const ingredientStr = event.target.ingredients.value;
    setIngredients(ingredientStr.split(","));
  }

  return (
    <>
      <h1 className="quote">
        “Cooking is like painting or writing a song. Just as there are only so
        many notes or colors, there are only so many flavors—it’s how you
        combine them that sets you apart.”
      </h1>
      <form onSubmit={onCheck}>
        <label htmlFor="ingredients">Enter ingredients separated by commas:</label>
        <input type="text" name="ingredients" id="ingredients" required />
        <button type="submit">Search Recipes</button>
      </form>
      <RecipeList recipeList={recipeList} />
    </>
  );
}

export default RecipesPage;
