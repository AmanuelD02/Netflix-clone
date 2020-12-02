import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
	const [ show, handleShow ] = useState([]);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);
	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img className="nav__logo" src="https://pngimg.com/uploads/netflix/netflix_PNG12.png" alt="Netflix Logo" />

			<button className="nav__avater">Login</button>
		</div>
	);
}

//2:32

export default Nav;
