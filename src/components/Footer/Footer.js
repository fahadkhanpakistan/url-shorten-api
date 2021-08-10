/** @format */
import './Footer.css';
import { Logo, Twitter, Facebook, Pinrerest, Instagram } from '../icons/Icons';
const Footer = (props) => {
	return (
		<div className='footer-container'>
			<div className='footer-sub-container'>
				<Logo className='logo' />
				<div className='features links'>
					<b>Features</b>
					<ul>
						<li>Link Shortening</li>
						<li>Branded Links</li>
						<li>Analytics</li>
					</ul>
				</div>
				<div className='resources links'>
					<b>Recources</b>
					<ul>
						<li>Blog</li>
						<li>Developers</li>
						<li>Support</li>
					</ul>
				</div>
				<div className='company links'>
					<b>Company</b>
					<ul>
						<li>About</li>
						<li>Our Team</li>
						<li>Careers</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className='social-media-container'>
					{/* <img src={facebook} alt='facebook' />
					<img src={twitter} alt='twitter' />
					<img src={pinterest} alt='pinterest' />
					<img src={instagram} alt='instagram' /> */}
					<Facebook className='icon' />
					<Twitter className='icon' />
					<Pinrerest className='icon' />
					<Instagram className='icon' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
