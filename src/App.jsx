import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'

import { FetchProvider } from './Context/FetchContext'
import ShopSingle from './pages/ShopSingle'
import BottomCom from './components/BottomCom'
import Quality from './pages/Quality'

const App = () => {
	return (
		<>
<<<<<<< HEAD
			<div className='bg-oqrang text-kok'>
<<<<<<< HEAD
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='abaut/' element={<Abaut />} />
				</Routes>
=======
=======
			<div className='bg-oqrang text-kok '>
>>>>>>> b4f520b0a6561a7650ae3502f1820ef85bb8d8ac
				<FetchProvider>
					<Header />
					<Quality/>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/shop' element={<Shop/>} />
						<Route path='/shopsingle' element={<ShopSingle/>} />
						<Route path='/' element={<Quality/>}/>
					</Routes>
					<div className="container mx-auto p-4">
						<BottomCom />
					</div>
				</FetchProvider>
>>>>>>> 229cd3e83d9b45fb96ee41a4ceed79b5ac52be8e
			</div>
		</>
	)
}

export default App
