import './bar.css';
import Logo from '../../images/logo.svg';
import Iteam from '../bariteam/bariteam';
import Overview from '../../images/over.svg';
import Tickets from '../../images/tic.svg';
import Ideas from '../../images/ideas.svg';
import Contacts from '../../images/contack.svg';
import Agents from '../../images/agents.svg';
import Articles from '../../images/articles.svg';
import Settings from '../../images/settings.svg';
import Subscription from '../../images/subscription.svg';
import { NavLink } from 'react-router-dom';

let Sam = () => {
	return (
		<div className='sambar'>
			<div>
				<a href='#'>
					<img
						className='logo'
						src={Logo}
						alt='logo-sitr'
						height='32'
						width='180'
					/>
				</a>
			</div>
			<ul className='samlist'>
				<NavLink to='/'>
					<Iteam img={Overview} text='Overview' />
				</NavLink>
				<NavLink to='/USer'>
					<Iteam img={Tickets} text='Tickets' />
				</NavLink>
				<Iteam img={Ideas} text='Ideas' />
				<Iteam img={Contacts} text='Contacts' />
				<Iteam img={Agents} text='Agents' />
				<Iteam img={Articles} text='Articles' />
				<Iteam img={Settings} text='Settings' />
				<Iteam img={Subscription} text='Subscription' />
			</ul>
		</div>
	);
};

export default Sam;
