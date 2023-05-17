import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import ShoppingListPage from './Pages/ShoppingListPage/ShoppingListPage';
import RecipesPage from './Pages/RecipesPage/RecipesPage';

console.log(process.env.REACT_APP_WEATHER_API_KEY);

function App() {
  return (

  <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='shopping-list-page' element={<ShoppingListPage />} />
          <Route path='shoppingList' element={<Navigate to='/shopping-list-page' />} />
          <Route path='recipes-page' element={<RecipesPage />} />
          <Route path='recipes' element={<Navigate to='/recipes-page' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
