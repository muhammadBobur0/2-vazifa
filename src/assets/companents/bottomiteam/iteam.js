import './iteam.css';

let bottomListIteam = ({ name, number }) => {
	return (
		<li className='bottom-list-iteam'>
			<span className='bottom-text'>{name}</span>
			<span className='bottom-number'>{number}</span>
		</li>
	);
};

export default bottomListIteam;
