import "./RecipesPage.scss"
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from "../../Components/Header/Header";
import Input from "../../Components/InputIngredients/InputIngredients";
import RecipeList from "../../Components/RecipeList/RecipeList";
import BackgroundRecipe from "../../Components/Background-Recipe/BackgroundRecipe";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";


function RecipesPage() {
  const [ingredients, setIngredients] = useState([])
  const [recipeList, setRecipeList] = useState([]);

  //axio call with Edamame API useeffect with the ingredients as depedencies
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=b365bd97&app_key=${API_KEY}`)
      .then(response => {
        const recipeArray = []
        for (let j = 0; j < 5; j++) {
          const recipes = response.data.hits[`${j}`];

          const title = recipes.recipe.label
          const image = recipes.recipe.image
          const calories = recipes.recipe.calories
          const dietLabels = recipes.recipe.dietLabels
         


          const ingredientsText = []
          const ingredients = recipes.recipe.ingredients;
          for (let k = 0; k < ingredients.length; k++) {
            ingredientsText.push(ingredients[`${k}`].text)
          }

          const recipe = {
            "title": title,
            "image": image,
            "ingredients": ingredientsText,
            "calories": calories,
            "dietLabels": dietLabels,
         
          }
          recipeArray.push(recipe);
        }
        setRecipeList(recipeArray);

      }
      ).catch(err => {
        console.log(err)
      })
  }, [ingredients])

  function onSubmit(event) {
    event.preventDefault();
    const ingredientStr = event.target.ingredients.value;
    setIngredients(ingredientStr)
  }

  return (
    <div>
      <Header />
      <div className="pages--background">
        <BackgroundRecipe />
        <nav className="nav-recipes--display">
          <Link to='/'>
            <h1 className="recipe__items__title">H O M E</h1>
          </Link>
        </nav>
        <Input onSubmitHandler={onSubmit} />
        <RecipeList recipeList={recipeList} />
        <Footer />
      </div>
    </div>

  )

}

export default RecipesPage;