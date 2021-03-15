import React from 'react';

export default function Nav() {
	return (
		<nav className='nav'>
			<section className='logo'>
				<a href='#'>logo</a>
			</section>
			<section className='main'>
				<ul className='mainNav'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Projects</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
				</ul>
			</section>
		</nav>
	);
}
