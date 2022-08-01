import Serach from '../../images/search.svg';
import './head.css';
import News from '../../images/new.svg';
import Jones from '../../images/photo.png';

let head = () => {
	return (
		<div className='Overview'>
			<h2 className='tittle'>Overview</h2>
			<div className='serach-box'>
				<button className='search'>
					<img src={Serach} alt='' width='16' height='16' />
				</button>
				<button className='news'>
					<img src={News} alt='' width='16' height='16' />
				</button>
				<span className='border'></span>
				<h3 className='name'>Jones Ferdinand</h3>
				<img src={Jones} alt='Jones Ferdinand' />
			</div>
		</div>
	);
};

export default head;
