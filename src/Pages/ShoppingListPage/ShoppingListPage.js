import './ShoppingListPage.scss';
import Quotes from '../../Components/Quotes/Quotes';
import Logo from '../../Components/Logo/Logo';
import ShoppingList from '../../Components/ShoppingList/ShoppingList';
import LoggedIn from '../../Components/LoggedIn/LoggedIn';


function ShoppingListPage() {
  return (
    <section className="page--background">
    <header className="header--display">
    <Logo />
    <LoggedIn /> 
    </header>
    <Quotes />
    <ShoppingList />
    </section>
  )
}
export default ShoppingListPage;