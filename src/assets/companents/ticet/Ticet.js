import Head from '../header/Header';
import Sort from '../../images/search.svg';
import Filter from '../../images/filter.svg';
import Uiteam from '../itmticet/imtticet';
import Tom from '../../images/tom.png';
import Mat from '../../images/matt.png';
import Rob from '../../images/rob.png';
import Bel from '../../images/balle.png';
import Cavil from '../../images/Cavil.png';
import Chris from '../../images/Chris.png';
import Sam from '../../images/Sam.png';
import Steve from '../../images/Steve.png';
import './user.css';

let User = () => {
	let array = [
		{
			img: Tom,
			contact: 'Contact Email not Linked',
			update: 'Updated 1 day ago',
			name: 'Tom Cruise',
			data: 'on 24.05.2019',
			datas: 'May 26, 2019',
			time: '6:30 PM',
			type: 'High',
		},
		{
			img: Mat,
			contact: 'Adding Images to Featured Posts',
			update: 'Updated 1 day ago',
			name: 'Matt Damon',
			data: 'on 24.05.2019',
			datas: 'May 26, 2019',
			time: '8:00 AM',
			type: 'low',
		},
		{
			img: Rob,
			contact: 'When will I be charged this month?',
			update: 'Updated 1 day ago',
			name: 'Robert Downey',
			data: 'on 24.05.2019',
			datas: 'May 26, 2019',
			time: '7:30 PM',
			type: 'High',
		},
		{
			img: Bel,
			contact: 'Payment not going through',
			update: 'Updated 2 day ago',
			name: 'Christian Bale',
			data: 'on 24.05.2019',
			datas: 'May 25, 2019',
			time: '5:00 PM',
			type: 'Normal',
		},
		{
			img: Cavil,
			contact: 'Unable to add replies',
			update: 'Updated 2 day ago',
			name: 'Henry Cavil',
			data: 'on 24.05.2019',
			datas: 'May 25, 2019',
			time: '4:00 PM',
			type: 'High',
		},
		{
			img: Chris,
			contact: 'Downtime since last week',
			update: 'Updated 3 days ago',
			name: 'Chris Evans',
			data: 'on 24.05.2019',
			datas: 'May 25, 2019',
			time: '2:00 PM',
			type: 'Normal',
		},
		{
			img: Sam,
			contact: 'Referral Bonus',
			update: 'Updated 4 day ago',
			name: 'Sam Smith',
			data: 'on 22.05.2019',
			datas: 'May 25, 2019',
			time: '11:30 AM',
			type: 'low',
		},
		{
			img: Sam,
			contact: 'How do I change my password?',
			update: 'Updated 6 days ago',
			name: 'Steve Rogers',
			data: 'on 21.05.2019',
			datas: 'May 24, 2019',
			time: '1:00 PM',
			type: 'Normal',
		},
	];

	return (
		<div className='header'>
			<Head />
			<div>
				<div className='user'>
					<h2 className='tickets'>All tickets</h2>
					<button className='sort'>
						{' '}
						<img
							className='imgsort'
							width={14}
							height={14}
							src={Sort}
							alt=''
						/>{' '}
						Sort
					</button>
					<button className='filter'>
						<img
							className='imgsort'
							src={Filter}
							width={14}
							height={14}
							alt=''
						/>
						filter
					</button>
				</div>
				<div className='deaitls'>
					<p className='Ticket'>Ticket details</p>
					<p className='Ticket'>Customer name</p>
					<p className='Ticket'>Date</p>
					<p className='Ticket'>Priority</p>
				</div>
				<ul className='uselist'>
					{array.map((e) => (
						<Uiteam key={e.name} data={e} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default User;
