
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { FetchProvider } from './Context/FetchContext'
import ShopSingle from './pages/ShopSingle'
import BottomCom from './components/BottomCom'
import Quality from './pages/Quality'
import Abaut from './pages/Abaut'

const App = () => {
	return (
		<div>
			<div className='bg-oqrang text-kok'>
				<FetchProvider>
					<Header />

					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/abaut' element={<Abaut />} />
						<Route path='/shop' element={<Shop />} />
						<Route path='/shopsingle' element={<ShopSingle />} />
						<Route path='/quality' element={<Quality />} />
					</Routes>

					<div className="container mx-auto p-4">
						<BottomCom />
					</div>
				</FetchProvider>
			</div>
		</div>
	)
}

export default App