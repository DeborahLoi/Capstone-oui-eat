import './BackgroundRecipe.scss';

import RecipeBackground from '../../Assets01/Images/background-recipe.png'


export default function BackgroundRecipe() {
  return (
    <>
      <div className="logged__avatar">
        <img className="background__image" src={RecipeBackground} alt="green and white background" />
      </div>
      <div className="logged--display" >
      </div>
    </>
  )
}




