import './Logo.scss';
import LogoWeEat from '../../Assets01/Logo/logo.mp4';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    
      
  <Link to='/'>
    <video className= "logo-home-page" src={LogoWeEat} autoPlay loop muted />
  </Link>
  
  )
}

export default Logo
