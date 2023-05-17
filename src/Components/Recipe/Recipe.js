import "./Recipe.scss";
import LikesIcon from '../../Assets01/Icons/likes.svg'
import ViewsIcon from '../../Assets01/Icons/views.svg'

function Recipe({ title, image, calories, ingredients, dietLabels }) {
  return (
    <div className="recipe__container">
      <div className="recipe">
        <div className="recipe__header" >
          <h2 className="recipe__title">{title}</h2>
          <div className="recipe--display">
            <img className="recipe__image" src={image} alt={title} />
            <ul className="recipe__info--display recipe__ingredients">

              <li>4 servings</li>
              <li >Calories: {Math.round(calories)} kcal</li>
              <li>Diet Label: {dietLabels} </li>
            </ul> </div></div>
        <ul className="recipe__ingredients">
          {ingredients && ingredients.map((ingredient) => <li className="recipe-items">{ingredient}</li>)}
        </ul>
        <div className="views-likes--display">
          <div className="video-details--padding video-details--color "><img src={ViewsIcon} alt="Views Icon" /> 2350</div>
          <div className="video-details--padding video-details--color "><img src={LikesIcon} alt="Likes Icon" /> 100</div>
        </div>
      </div>
    </div>


  );
}

export default Recipe;
