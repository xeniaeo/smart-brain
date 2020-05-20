import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';
/*Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>*/

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }}>
				<div className="Tilt-inner pa3">
					<img alt='logo' src={brain}/>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;