import './ShoppingList.scss';
import React, { useState } from 'react';
import ingredientsData from '../../data/ingredients.json';
import RadialContainer from '../RadialContainer/RadialContainer';

function ShoppingList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  function handleIngredientClick(event) {
    const ingredient = event.target.value;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      setSelectedIngredients(prevSelectedIngredients => [...prevSelectedIngredients, ingredient]);
      setScore(prevScore => prevScore + ingredientsData[ingredient]);
    } else {
      setSelectedIngredients(prevSelectedIngredients => prevSelectedIngredients.filter((item) => item !== ingredient));
      setScore(prevScore => prevScore - ingredientsData[ingredient]);
    }
    
    let scorePercentage = Math.round((score / ingredient.length));
    setPercentage(scorePercentage);

    console.log(score);
    console.log(scorePercentage);

  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
    
  }

  return (
    <div className= "shopping-list--display">
    <div className="shopping-list__items">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedIngredients.length > 0 ? `${selectedIngredients.length} ingredients selected` : 'CLICK HERE'}
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {Object.keys(ingredientsData).map(ingredient => (
            <li key={ingredient}>
              <label>
                <input 
                  className='input'
                  type="checkbox"
                  value={ingredient}
                  checked={selectedIngredients.includes(ingredient)}
                  onChange={handleIngredientClick}
                 
                />
                {ingredient}
              </label>
            </li>
          ))}
        </ul>
      )}
      <div>
        Score: {score}
      </div> </div>
      <div>
        <RadialContainer percentage={percentage} />
      </div>
   </div>
  );
}

export default ShoppingList;
