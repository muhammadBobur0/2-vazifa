import './side.css';

let side = ({ text, number }) => {
	return (
		<li className='sidebar-iteam'>
			<h3 className='text'>{text}</h3>
			<p className='bottom'>{number}</p>
		</li>
	);
};

export default side;
