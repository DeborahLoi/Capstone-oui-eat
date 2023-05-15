import './HomePage.scss';
import { Link } from 'react-router-dom';
import MenuDrop1 from '../../Assets01/Images/menu-drop-1.png';
import MenuDrop2 from '../../Assets01/Images/menu-drop-2.png';
import LoggedIn from '../../Components/LoggedIn/LoggedIn';
import AboutUs from '../../Components/AboutUs/AboutUs';
import HeaderHomePage from '../../Components/HeaderHomePage/HeaderHomePage';
import Footer from '../../Components/Footer/Footer';

 function HomePage() {
  return (
    <>
        
        <HeaderHomePage />
         <div className="pages--background"> 
        <LoggedIn />
        <div className="home-page__items--display">
        <nav className="nav--display">
            <h1 className="home-page__items__title">M E N U</h1>
        <Link to="/shopping-list-page" className="nav__items">
        <img className="nav__items__images" src={MenuDrop1} alt="meal"/>
            <h2> EAT YOUR SHOPPING LIST </h2>
         </Link>
         <div  className="nav__items nav__items--margin">
        <img className="nav__items__images" src={MenuDrop2} alt="meal"/>
            <h2> EATING IS SHARING </h2>
         </div> 
         </nav> 
         <AboutUs /> 
         </div>
         <Footer /> 
        </div>
     </>
  )
}

export default HomePage;
