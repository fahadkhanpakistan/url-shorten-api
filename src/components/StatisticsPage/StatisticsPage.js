/** @format */
import './StatisticsPage.css';
import brand from '../images/icon-brand-recognition.svg';
import record from '../images/icon-detailed-records.svg';
import customizable from '../images/icon-fully-customizable.svg';

const StatisticsPage = (props) => {
	return (
		<section className='statistics-page'>
			<UrlShorten />
			<div className='advanced-statistics'>
				<div className='advanced-statistics-info'>
					<h1 className='advanced-statistics-title'>Advanced Statistics</h1>
					<p className='advanced-statistics-para'>
						Track how your links are performing across the web with our advanced statistics
						dashboard
					</p>
				</div>
				<div className='chart'>
					<div className='chart-item brand'>
						<img src={brand} alt='brand' />

						<h2>Brand Recognition</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, fugit delectus
							itaque sit enim culpa unde. Quod fugit repellat modi dolore voluptatem. Ad
						</p>
					</div>
					<div className='chart-item record'>
						<img src={record} alt='record' />
						<h2>Detailed Records</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste rem soluta
							consequatur, rerum accusantium! Fugiat enim deleniti, ipsum, sint asperiores totam non
							expedita
						</p>
					</div>
					<div className='chart-item customizable'>
						<img src={customizable} alt='customizable' />
						<h2>Fully Customizable</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus illo sapiente
							reiciendis provident quaerat vel quidem at nemo doloribus necessitatibus a velit
							accusamus
						</p>
					</div>
				</div>
			</div>
			<div className='link-boost'>
				<h2>Boost your links today</h2>
				<button className='link-boost-btn'>Get Started</button>
			</div>
		</section>
	);
};

export default StatisticsPage;

function UrlShorten() {
	return (
		<div className='url-shorten'>
			<input type='text' placeholder='Shorten a link here ...' />
			<button>Shorten it!</button>
		</div>
	);
}
