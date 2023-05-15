import './RecipeList.scss';
import Recipe from '../Recipe/Recipe';


function RecipeList({recipeList}){
    console.log(recipeList)
    return (
        <>
        <div>
        {recipeList && recipeList.map( recipe => {
            return (<Recipe 
            title ={recipe.title}
            image = {recipe.image}
            ingredients = {recipe.ingredients}/> 
       )   
        })}</div>
  

        </>
    )
}

export default RecipeList;