import './App.css';
import Sambar from './assets/companents/bar/Bar';
import Descktop from './assets/companents/destop/descktop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './assets/companents/ticet/Ticet';

function App() {
	return (
		<div className='App'>
			<div className='container iner'>
				<Router>
					<Sambar />
					<Routes>
						<Route path='/' element={<Descktop />} />
						<Route path='/USer' element={<User />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
