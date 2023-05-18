import './Footer.scss';
import InstagramIcon from '../../Assets01/Icons/instagram.png';
import FacebookIcon from '../../Assets01/Icons/facebook.png';
import EmailIcon from '../../Assets01/Icons/email.png';
import AddressIcon from '../../Assets01/Icons/address.png';
import PhoneIcon from '../../Assets01/Icons/phone.png';


export default function Footer() {
  return (

    <footer className="footer">
      <div className="footer__items" >
        <div className="footer__social">
          <h4>Social Media</h4>
          <div className="footer__icons__container">
            <a href="https://www.instagram.com/deboeasy" target="blank"><img className="footer__icons" src={InstagramIcon} alt="instagram icon" /></a>
            <a href="https://www.facebook.com/buddydoux" target="blank"><img className="footer__icons" src={FacebookIcon} alt="facebook icon" /></a>
          </div></div>
        <div className="footer__contact">
          <h4>Contact Us</h4>
          <div className="footer__icons--display">
            <img className="footer__icons" src={AddressIcon} alt="location icon" />
            <p>123 Main Street, Miami, USA</p>
          </div>
          <div className="footer__icons--display">
            <img className="footer__icons" src={PhoneIcon} alt="phone icon with hearts" />
            <p className="footer-phone">(786) 881-3870</p>
          </div>
          <div className="footer__icons--display">
            <img className="footer__icons" src={EmailIcon} alt="icon for the email address" />
            <a className="footer__email" href='mailto:deboeasy92@gmail.com'>Contact us</a>
          </div>
        </div>
      </div>
      <p className="footer__copy-right">© 2023 OUI EAT. All Rights Reserved.</p>
    </footer>


  )
}
