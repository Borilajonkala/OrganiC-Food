
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ShopSingle from './pages/ShopSingle'
import BottomCom from './components/BottomCom'
import Footer from './components/Footer'
import Service from './pages/Service'
import Quality from './pages/Quality'
import About from './pages/About'
import Portifig from './pages/Portifig'
import ProductDetail from './pages/ProductDetail'
import Contacts from './pages/Contacts'

const App = () => {
	return (
		<>
			<div className='bg-oqrang text-kok'>
				<Header />

					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/shop' element={<Shop/>} />
						<Route path='/about' element={<About />} />
						<Route path='/shop/shopsingle/:id' element={<ShopSingle />} />
						<Route path='/home/shopsingle/:id' element={<ShopSingle />} />
						<Route path='/quality' element={<Quality />} />
						<Route path='/service' element={<Service />} />
						<Route path='/contact' element={<Contacts/>}/>
								<Route path='/projects' element={<Portifig />} />
					<Route path='/projects/:id' element={<ProductDetail />} />
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