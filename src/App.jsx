import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Abaut from './pages/Abaut'
const App = () => {
	return (
		<>
			<div className='bg-oqrang text-kok'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='abaut/' element={<Abaut />} />
				</Routes>
			</div>
		</>
	)
}

export default App
