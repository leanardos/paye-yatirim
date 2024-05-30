import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {

	const scrollToBottom = () => {
		console.log('comes to here');
		window.scroll({
			top: document.body.offsetHeight,
			left: 0,
			behavior: 'smooth',
		});
	};
	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Home scrollToBottom={scrollToBottom} />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/services'
						element={<Services />}
					/>
					{/* <Route
						path='/contact'
						element={<Contact />}
					/> */}
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
