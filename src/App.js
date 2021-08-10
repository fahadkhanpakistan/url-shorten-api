/** @format */

import './App.css';
import Footer from './components/Footer/Footer';
import HeroPage from './components/HeroPage/HeroPage';
import Nav from './components/Nav/Nav';
import StatisticsPage from './components/StatisticsPage/StatisticsPage';
function App() {
	return (
		<div className='App-container'>
			<header className='App-header'>
				<Nav />
				<HeroPage />
			</header>
			<main>
				<StatisticsPage />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
