/** @format */
import './HeroPage.css';
import heroImage from '../images/illustration-working.svg';
const HeroPage = (props) => {
	return (
		<section className='hero-page'>
			<div className='main-section'>
				<h1 className='hero-page-title'>More than just shorter links</h1>
				<p className='hero-page-tagline'>
					Build your brand's recognition and get detailed insights on how your links are performing
				</p>
				<button className='hero-page-btn'>Get Started</button>
			</div>
			<img src={heroImage} alt='Hero Page' className='vector-image' />
		</section>
	);
};

export default HeroPage;
