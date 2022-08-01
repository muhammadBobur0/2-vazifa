import './iteam.css';

let iteam = (props) => {
	let { text, img } = props;
	return (
		<li className='iteam'>
			<a className='links' href={{ text }}>
				<img className='imgs' src={img} alt={text} /> {text}
			</a>
		</li>
	);
};

export default iteam;
