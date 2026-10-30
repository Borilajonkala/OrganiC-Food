import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { FetchProvider } from './Context/FetchContext'

const App = () => {
	return (
		<>
			<div className='bg-oqrang text-kok'>
				<FetchProvider>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/shop' element={<Shop/>} />
					</Routes>
				</FetchProvider>
			</div>
		</>
	)
}

export default App
