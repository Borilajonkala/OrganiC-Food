
import { useSearchParams } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'
import Pgg from '../assets/pgg.png'
import Footer from '../components/Footer'

const Shop = () => {
	const { product, loading, error, refetch } = useFetchContext()
	const [searchParams] = useSearchParams()
	const search = searchParams.get('search')?.trim().toLowerCase() ?? ''
	const filteredProducts = product.filter((item) =>
		item.title.toLowerCase().includes(search),
	)

	return (
		<div>
			<img
				src={Pgg}
				alt='Organik banner'
				className='h-auto w-full object-cover'
			/>
			<div className='container mx-auto mt-30 max-w-7xl px-4 py-6'>
				{loading && <p role='status'>Loading products...</p>}
				{error && (
					<div role='alert'>
						<p>{error}</p>
						<button type='button' onClick={refetch}>
							Try again
						</button>
					</div>
				)}
				{!loading && !error && filteredProducts.length === 0 && (
					<p>No products found.</p>
				)}
				{!loading && !error && filteredProducts.length > 0 && (
					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{filteredProducts.slice(0, 12).map((item) => (
							<div key={item.id} className='rounded-xl border bg-[#DEDDDD] p-4'>
								<img
									src={item.image}
									alt={item.title}
									className='h-48 w-full object-contain'
								/>
								<h2 className='mt-3 font-bold'>{item.title}</h2>
								<p>${item.Price}</p>
							</div>
						))}
					</div>
				)}
			</div>
      
		</div>
	)
}

export default Shop
