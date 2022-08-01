import Iteam from '../mainitem/maintest';
import Center from '../center/center';
import Bottom from '../bottom/bottom';

import './main.css';

let main = () => {
	return (
		<div className='main'>
			<div className='top'>
				<Iteam name='Unresolved' number='60' />
				<Iteam name='Overdue' number='16' />
				<Iteam name='Open' number='43' />
				<Iteam name='On hold' number='64' />
			</div>
			<div className='center'>
				<Center />
			</div>
			<div>
				<Bottom />
			</div>
		</div>
	);
};

export default main;
