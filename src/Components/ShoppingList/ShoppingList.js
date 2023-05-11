import './ShoppingList.scss';
import React, { useState } from 'react';
import ingredientsData from '../../data/ingredients.json';
import RadialContainer from '../RadialContainer/RadialContainer';


function ShoppingList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0) 

  function handleIngredientClick(checkboxValue) {
    const ingredient = Object.keys(ingredientsData).find(
      (ingredient) => ingredient === checkboxValue
    );
  
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(prevSelectedIngredients => prevSelectedIngredients.filter((item) => item !== ingredient));
      setScore(prevScore => prevScore - ingredientsData[ingredient]);
      let scorePercentage = Math.round((score / 1000) * 100);
      setPercentage(scorePercentage);
    } else {
      setSelectedIngredients(prevSelectedIngredients => [...prevSelectedIngredients, ingredient]);
      setScore(prevScore => prevScore + ingredientsData[ingredient]);
      let scorePercentage = Math.round((score / 1000) * 100);
      setPercentage(scorePercentage);
    }
    
    // let scorePercentage = Math.round((score / 1000) * 100);
    // setPercentage(scorePercentage);
    // console.log(setPercentage);
    // console.log(score);
    
  }
  
  
  
   
  
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedIngredients.length > 0 ? `${selectedIngredients.length} ingredients selected` : 'Select ingredients'}
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            {Object.keys(ingredientsData).map(ingredient => (
              <li key={ingredient}>
                <label>
                  <input
                    type="checkbox"
                    value={ingredient}
                    checked={selectedIngredients.includes(ingredient)}
                    onChange={() => handleIngredientClick(ingredient)}
                  />
                  {ingredient}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        Score: {score}
      </div>
      <div>
        <RadialContainer percentage={percentage} />
      </div>
    </div>
  );
}


export default ShoppingList;

// const list = [ ... ];
//  const List = () => ( <ul>
//   const ref = React. createRef(); const handleClick = () => ref. current. scrollIntoView({ behavior: 'smooth', block: 'start',
//   }); return ( <li. key={item. id} ref={ref}