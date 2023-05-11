import './Logo.scss';
import { Link } from 'react-router-dom';
import LogoWeEat from '../../Assets01/Logo/logo.mp4';

function Logo() {
  return (
    
      
  <div>
      <Link to="/">
        <video className= "logo" src={LogoWeEat} autoPlay loop muted />
        <h1>H O M E</h1>
      </Link>
      </div>
  
  )
}

export default Logo
