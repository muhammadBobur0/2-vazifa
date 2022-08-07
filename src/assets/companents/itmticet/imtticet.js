import Btn from '../../images/Vector.svg';

let TicItm = (props) => {
	let { contact, name, img, update, data, datas, time, type } = props.data;
	return (
		<li className='dfelx'>
			<img className='user-img' src={img} alt='' />
			<div className='cloum' style={{ width: '100px' }}>
				<h3 className='name'>{contact}</h3>
				<span className='data'>{update}</span>
			</div>
			<div className='cloum'>
				<h3 className='name'>{name}</h3>
				<span className='data'>{data}</span>
			</div>
			<div className='cloum'>
				<h3 className='name'>{datas}</h3>
				<span className='data'>{time}</span>
			</div>
			<button className={type}>{type}</button>
			<button className='btn'>
				<img src={Btn} height='16' width={4} alt='' />
			</button>
		</li>
	);
};

export default TicItm;
