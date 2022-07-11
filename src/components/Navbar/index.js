import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './nav';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			About
		</NavLink>
		<NavLink to='/projects' activeStyle>
			Projects
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact
		</NavLink>
		<NavLink to='/skills' activeStyle>
			Skills
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
