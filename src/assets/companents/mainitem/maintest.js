import './maintest.css';

let Iteam = ({ name, number }) => {
	return (
		<div className='box'>
			<h3 className='box-text'>{name}</h3>
			<span className='number'>{number}</span>
		</div>
	);
};

export default Iteam;
