import './check.css';

let Check = ({ name, status }) => {
	return (
		<li className='bottom-list-iteam'>
			{status === 'plus' ? (
				''
			) : (
				<input name='status' value={status} className='input' type='radio' />
			)}
			<span className={status === 'plus' ? 'plus-text' : 'bottom-text'}>
				{name}
			</span>
			<span className={status}>{status === 'plus' ? '' : status}</span>
		</li>
	);
};

export default Check;
