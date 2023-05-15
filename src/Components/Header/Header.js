import './Header.scss';
import Logo from '../Logo/Logo';

function Header() {
  return (
  <>
    <Logo className= "header__logo" />
    <div className="header">
    <div className="loggin"></div>
        <h1>DEBOEASY</h1>
    </div>
    </>
  )
}

export default  Header
