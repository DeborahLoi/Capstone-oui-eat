import './RecipeList.scss';
import Recipe from '../Recipe/Recipe';

function RecipeList({recipeList}){
  
    return (
        <>
        <div>
        {recipeList && recipeList.map( (recipe) => { 
            return (<Recipe 
            key={recipe.id}
            title ={recipe.title}
            image = {recipe.image}
            ingredients = {recipe.ingredients}
            calories = {recipe.calories}
            dietLabels =  {recipe.dietLabels}
            
            
            />
       )   
        })}</div>
  

        </>
    )
}

export default RecipeList;