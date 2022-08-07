import './iteam.css';

let iteam = (props) => {
	let { text, img } = props;
	return (
		<li className='iteam'>
			<p className='links'>
				<img className='imgs' src={img} alt={text} /> <span> {text} </span>
			</p>
		</li>
	);
};

export default iteam;
