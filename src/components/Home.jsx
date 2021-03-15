import React from 'react';
import businessMeeting from '../images/businessMeeting.svg';
import ellipse from '../images/Ellipse 1.svg';
import '../style/main.css';

export default function Home() {
	return (
		<section className='home'>
			<article className='homeContainer'>
				<div className='homeInfoContainer'>
					<div className='ecllipse'>
						<img src={ellipse} alt='LOADING...' />
					</div>
					<div className='homeInfo'>
						<h1>
							Project <br /> Mangment <br /> Deconstracted
						</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur <br />
							adipisicing elit.Quod unde officia, molestiae suscipit placeat
							vitae tenetur exercitationem ratione inventore porro.
						</p>
						<div className='btnContainer'>
							<a href='#'>get started</a>

							<a href='#'>learn more</a>
						</div>
					</div>
				</div>
				<div className='homeBusinessMeeting'>
					<img src={businessMeeting} alt='LOADING...' />
				</div>
			</article>
		</section>
	);
}
