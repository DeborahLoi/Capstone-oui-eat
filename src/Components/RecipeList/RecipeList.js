import './RecipeList.scss';
import Recipe from '../Recipe/Recipe';
import { isPresent } from '@progress/kendo-react-dropdowns/dist/npm/common/utils';


function RecipeList({recipeList}){
  
    return (
        <>
        <div>
        {recipeList && recipeList.map( recipe => { 
            return (<Recipe 
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