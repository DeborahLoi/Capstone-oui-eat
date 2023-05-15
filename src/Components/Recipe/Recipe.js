import "./Recipe.scss"


function Recipe({title, image, ingredients}) {

    return (
<>
<div className="recipe">
        <div className="recipe__display">
        <h2 className="recipe__title">{title}</h2>
        <img className="recipe__image" src={image}></img>
        
        </div>
    <div className="recipe__ingredients">
{ingredients && ingredients.map(ingredient=> (<p>{ingredient}</p>))}
</div>

</div>
</>
    );
}

export default Recipe;