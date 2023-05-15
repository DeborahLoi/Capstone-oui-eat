import './HeaderHomePage.scss';
import Logo from '../Logo/Logo';

export default function HeaderHomePage() {
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
