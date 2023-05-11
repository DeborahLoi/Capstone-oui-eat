import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import ShoppingListPage from './Pages/ShoppingListPage/ShoppingListPage';



function App() {
  return (

  <div>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='shopping-list-page' element={<ShoppingListPage />} />
          <Route path='shoppingList' element={<Navigate to='/shopping-list-page' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
