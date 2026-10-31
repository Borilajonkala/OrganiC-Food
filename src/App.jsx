import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
<<<<<<< HEAD
import Abaut from './pages/Abaut'
=======
import Shop from './pages/Shop'
import { FetchProvider } from './Context/FetchContext'

>>>>>>> 229cd3e83d9b45fb96ee41a4ceed79b5ac52be8e
const App = () => {
	return (
		<>
			<div className='bg-oqrang text-kok'>
<<<<<<< HEAD
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='abaut/' element={<Abaut />} />
				</Routes>
=======
				<FetchProvider>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/shop' element={<Shop/>} />
					</Routes>
				</FetchProvider>
>>>>>>> 229cd3e83d9b45fb96ee41a4ceed79b5ac52be8e
			</div>
		</>
	)
}

export default App
