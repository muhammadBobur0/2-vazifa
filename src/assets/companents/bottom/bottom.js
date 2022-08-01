import './bottom.css';
import '../bottomiteam/iteam';
import Iteams from '../bottomiteam/iteam';
import Check from '../botom/iteamcheck';

let bottom = () => {
	return (
		<div className='main-bottom'>
			<div className='bottom-box'>
				<div className='Support'>
					<h2 className='ticed'>Unresolved tickets</h2>
					<a className='view' href='/#'>
						View details
					</a>
				</div>
				<div className='group-box'>
					<p className='group'>
						Group: <strong className='group-strong'>Support</strong>
					</p>
				</div>
				<ul className='group-list'>
					<Iteams name='Waiting on Feature Request' number='4238' />
					<Iteams name='Awaiting Customer Response' number='1005' />
					<Iteams name='Awaiting Developer Fix' number='914' />
					<Iteams name='Pending' number='281' />
				</ul>
			</div>

			<div className='bottom-box'>
				<div className='Support'>
					<h2 className='ticed'>Tasks</h2>
					<a className='view' href='/#'>
						View all
					</a>
				</div>
				<div className='group-box'>
					<p className='group'>
						Group: <strong className='group-strong'>Today</strong>
					</p>
				</div>
				<ul className='group-list'>
					<Check name='Create new task' status='plus' />
					<Check name='Finish ticket update' status='Urgent' />
					<Check name='Create new ticket example' status='New' />
					<Check name='Update ticket report' status='Default' />
				</ul>
			</div>
		</div>
	);
};

export default bottom;
