import "./Search.scss"
import InputIngredients from '../InputIngredients/InputIngredients';
import axios from 'axios';
import {useState, useEffect} from 'react';

import RecipeList from "../RecipeList/RecipeList";


function Hero() {
  const [ingredients, setIngredients] = useState([])
  const [recipeList, setRecipeList]= useState([]);
    
  useEffect( () => {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=b365bd97&app_key=65a0dbafe39a7b8890499e7a169f7eb6`)
    .then(response =>{
                const recipeArray = []
                for(let j = 0; j < 5; j++){
                    const recipes = response.data.hits[`${j}`];
                    
                    const title = recipes.recipe.label
                    const image = recipes.recipe.image

                    const ingredientsText = []
                    const ingredients = recipes.recipe.ingredients;
                    for(let k = 0; k < ingredients.length; k++ ){
                        ingredientsText.push(ingredients[`${k}`].text)
                    }

                    const recipe = {
                        "title": title,
                        "image":image,
                        "ingredients":ingredientsText,
                    }
                    recipeArray.push(recipe);
                }
                setRecipeList(recipeArray);
                console.log(recipeList);
            }
            ).catch( err => {
                console.log(err)
            })  
  }, [ingredients])

  function onSubmit (event){
    event.preventDefault();
    const ingredientStr= event.target.ingredients.value;
    setIngredients(ingredientStr)
  }

  return (<>
  <h1 className="quote">
“Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart.”</h1>
  <InputIngredients onSubmitHandler = {onSubmit}/>
  <RecipeList recipeList = {recipeList}/>
  </>
  )
 
}

export default Hero;