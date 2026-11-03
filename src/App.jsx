import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Service from './pages/Service'

import { FetchProvider } from './Context/FetchContext'
import ShopSingle from './pages/ShopSingle'
import NotFound from './pages/NotFound'
import BottomCom from './components/BottomCom'

const App = () => {
	return (
		<>
			<div className='bg-oqrang text-kok '>
				<FetchProvider>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/shop' element={<Shop/>} />
						<Route path='/shopsingle' element={<ShopSingle/>} />
						<Route path='/service' element={<Service/>} />
						<Route path='*' element={<NotFound/>} />
					</Routes>
					<div className="container mx-auto p-4">
						<BottomCom />
					</div>
				</FetchProvider>
			</div>
		</>
	)
}

export default App
