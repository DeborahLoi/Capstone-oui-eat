import './ShoppingListPage.scss';
import Quotes from '../../Components/Quotes/Quotes';
import ShoppingList from '../../Components/ShoppingList/ShoppingList';
import Footer from '../../Components/Footer/Footer';
import BackgroundShopping from '../../Components/BackgroundShopping/BackgroundShopping';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';



function ShoppingListPage() {
  return (

    <>
        
    <Header />
     <div className="pages--background"> 
    <BackgroundShopping/>
    <nav className="nav-shopping--display">
      <Link to='/'>
        <h1 className="shopping-list__items__title">H O M E</h1>
     </Link>  
     </nav>
     <div className="shopping-list__items--display"  >
    <Quotes />
     <ShoppingList />
     </div>
     <Footer /> 
    </div>
 </>
  )
}
export default ShoppingListPage;