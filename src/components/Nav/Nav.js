/** @format */
import { useState } from 'react';
import logo from '../images/logo.svg';
import './Nav.css';
const Nav = (props) => {
	const [isHidden, setIshidden] = useState(true);
	const toggleMenu = () => {
		setIshidden(!isHidden);
	};
	return (
		<nav className='Nav-container'>
			<img src={logo} alt='logo' className='logo' />
			<ul className={`Nav-list ${isHidden ? 'nav-list-hide' : 'nav-lis-show'}`}>
				<li>Features</li>
				<li>Pricing</li>
				<li>Resources</li>
				<div className='login-container'>
					<li className='login'>Login</li>
					<button className='signup'>Sign Up</button>
				</div>
			</ul>
			<div className='menu' onClick={toggleMenu}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
};

export default Nav;
