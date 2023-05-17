import './ShoppingList.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ingredientsData from '../../data/ingredients.json';
import RadialContainer from '../RadialContainer/RadialContainer';
import HealthyResult from '../../Assets01/Images/healthy-result.mp4';

function ShoppingList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [score, setScore] = useState(0);
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    if (selectedIngredients.length > 0) {
      const totalScore = selectedIngredients.reduce((acc, ingredient) => {
        return acc + ingredientsData[ingredient];
      }, 0);
      const newAverageScore = Math.round(totalScore / selectedIngredients.length);
      setAverageScore(newAverageScore);
    } else {
      setAverageScore(0);
    }
  }, [selectedIngredients]);

  useEffect(() => {
    const scorePercentage = Math.round(score / selectedIngredients.length);
    setAverageScore(scorePercentage);
  }, [score, selectedIngredients]);

  function handleIngredientClick(event) {
    const ingredient = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedIngredients(prevSelectedIngredients => [...prevSelectedIngredients, ingredient]);
      setScore(prevScore => prevScore + ingredientsData[ingredient]);
    } else {
      setSelectedIngredients(prevSelectedIngredients =>
        prevSelectedIngredients.filter(item => item !== ingredient)
      );
      setScore(prevScore => prevScore - ingredientsData[ingredient]);
    }
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="shopping-list--display">
      <div className="shopping-list__items">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedIngredients.length > 0 ? `${selectedIngredients.length} ingredients selected` : 'CLICK HERE'}
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            {Object.keys(ingredientsData).map(ingredient => (
              <li className="list" key={ingredient.id}>
                <label>
                  <input
                    className="input"
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
        <div className="score__container">
          <p className="score">Total score: {score}</p>
          <p className="score__container--definition">*The total score is calculated by adding up the healthy score of each ingredient. The Health score itself is determined using the formula H = N/C, where N represents the nutrient content and C represents calories.</p>
        </div >
      </div>
      <div className="radial__container">
        {averageScore > 0 && (
          <>
            <Link to='/recipes-page' >
              <button className='recipes__button' type="submit"> Your recipes</button>
            </Link>
            <RadialContainer percentage={averageScore} />
            <span className="radial__container--score">{`${averageScore} `}</span>
            <p>Average nutri scoring</p>

            
            {averageScore > 333 && (
  <>
    
    <video className="healthy-result" src={HealthyResult} autoPlay loop muted alt="healthy message" />
    <button className="save__button" type="button">SAVE MY SHOPPING LIST</button>
  </>)}
          </>
        )}
        {averageScore <= 0 && (
          <p> </p>
        )}

      </div>
    </div>
  );

}

export default ShoppingList;
