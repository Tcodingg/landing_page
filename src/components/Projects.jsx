import React from 'react';
import '../style/main.css';
import getSetUp from '../images/get_setup.png';

export default function Projects() {
	return (
		<section className='projects'>
			<div className='projectsDescribe'>
				<h1>Powerful, Yet Simple</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita{' '}
					<br />
					laudantium ex quasi commodi impedit?
				</p>
			</div>
			<div className='projectInfo'>
				<img src={getSetUp} alt='' />
				<div className='info'>
					<h3>intuitive</h3>
					<h1>Get setup quickly</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit
						labore.
					</p>
				</div>
			</div>
		</section>
	);
}
