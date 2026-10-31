import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ShopSingle from './pages/ShopSingle'
import BottomCom from './components/BottomCom'
import Footer from './components/Footer'

const App = () => {
	return (
		<>
			<div className='bg-oqrang text-kok '>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/shop' element={<Shop/>} />
						<Route path='/shopsingle' element={<ShopSingle/>} />
					</Routes>
					<div className="container mx-auto p-4">
						<BottomCom />
						<Footer />
					</div>
			
			</div>
		</>
	)
}

export default App
