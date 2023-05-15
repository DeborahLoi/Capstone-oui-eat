import './ShoppingList.scss';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ingredientsData from '../../data/ingredients.json';
import RadialContainer from '../RadialContainer/RadialContainer';
// import HealthyVideo from '../../Assets01/Images/healthy-video.mp4';


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
      setScore(prevScore => prevScore + ingredientsData[ingredient], () => {
        const scorePercentage = Math.round((score / selectedIngredients.length));
        setPercentage(scorePercentage);
      });
    } else {
      setSelectedIngredients(prevSelectedIngredients => prevSelectedIngredients.filter((item) => item !== ingredient));
      setScore(prevScore => prevScore - ingredientsData[ingredient], () => {
        const scorePercentage = Math.round((score / selectedIngredients.length));
        setPercentage(scorePercentage);
      });
    }
  }
  const [averageScore, setAverageScore] = useState(0);
    
    useEffect(() => {
      if (selectedIngredients.length > 0) {
        const totalScore = selectedIngredients.reduce((acc, ingredient) => {
          return acc + ingredientsData[ingredient];
        }, 0);
        const newAverageScore = Math.round(totalScore / selectedIngredients.length);
        setAverageScore(newAverageScore); console.log(newAverageScore)
      } else {
        setAverageScore(0);
      }
    }, [selectedIngredients]);

   
  

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
      </div > 
      </div>
      <div className="radial__container">
      {averageScore > 0 && (
  <>
    <Link  to='/recipes-page' >
      <button className='recipes__button' type="submit"> Your recipes</button>
    </Link>
    <RadialContainer percentage={averageScore} />
    <span className="radial__container--score">{`${averageScore}% `}</span>
    <p>of the best nutri scoring</p>

    {averageScore < 33 && <p>Bad</p>}
    {averageScore >= 33 && averageScore <= 76 && <p>Good</p>}
    {averageScore > 76 && <iframe > </iframe>}
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
