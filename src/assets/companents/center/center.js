import './center.css';

import Sidebar from '../main-sidebar/sidebar';

let senter = (props) => {
	return (
		<div className='today'>
			<div className='days-box'>
				<h3 className='days'>Today’s trends</h3>
				<div className='data-static'>
					<p className='data'>as of 25 May 2019, 09:41 PM</p>
					<span className='day'>Today</span>
					<span className='yestday'>Yesterday</span>
				</div>
			</div>
			<div className='main-bar'>
				<ul className='main-list'>
					<Sidebar text='Resolved' number='449' />
					<Sidebar text='Received' number='426' />
					<Sidebar text='Average first response time' number='33m' />
					<Sidebar text='Average response time' number='3h 8m' />
					<Sidebar text='Resolution within SLA' number='94%' />
				</ul>
			</div>
		</div>
	);
};

export default senter;
