import './BackgroundShopping.scss';
import ShoppingBackground from '../../Assets01/Images/shopping-background3.png';

function BackgroundShopping() {
  return (

    <>
      <div className="logged__avatar">
        <img className="logged__image" src={ShoppingBackground} alt="shopping-list rectangle background" />
      </div>
      <div className="logged--display" >
      </div>
    </>
  )
}

export default BackgroundShopping

