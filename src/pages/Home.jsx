import { Star } from 'lucide-react'
import Img from '../assets/bgGroundHome.png'
import bgImgone from '../assets/bgimgone.png'
import bgImgtwo from '../assets/bgimgtwo.png'
import NutsCookis from '../assets/CookiesNuts.png'
import garden from '../assets/garden.png'
import latterbox from '../assets/latterbox.svg'
import leaf from '../assets/leaf.svg'
import limon from '../assets/Limon.png'
import OrganicJuise from '../assets/OrganicJuise.png'
import OrganicFood from '../assets/salatee.png'
import SalatLeafs from '../assets/SalatLeaf.png'
import Tometos from '../assets/Tomato.png'

import AOS  from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'

const Home = ({ search }) => {
	const { product } = useFetchContext()

	const query = (search || '').trim().toLowerCase()

<<<<<<< HEAD
const Home = () => {
	const { product, loading, error } = useFetchContext()
	  const [searchParams] = useSearchParams()
	  const search = searchParams.get('search')?.trim().toLowerCase() ?? ''
=======
	const filteredProduct = (product || []).filter(
		item =>
			item.title?.toLowerCase().includes(query) ||
			item.category?.toLowerCase().includes(query)
	)
>>>>>>> 0edf308de69059d7e36258a55e243f20593c272c

	console.log(product)

	useEffect(() => {
		AOS.init({
			duration: 700,
			once: true,
		})
	}, [])

<<<<<<< HEAD
	  const filteredProducts = product.filter(item =>
    item.title?.toLowerCase().includes(search),
  )
=======
>>>>>>> 0edf308de69059d7e36258a55e243f20593c272c
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${Img})`,
					backgroundSize: '100% 100%',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className='p-[200px] flex flex-col gap-2 '>
					<p className='text-[36px] font-yellowtail text-yashil'>
						100% Natural Food
					</p>
					<h1 className='text-kok w-[530px] text-[70px] font-extrabold'>
						Choose the best healthier way of life
					</h1>
					<button className='bg-sariq  hover:bg-yellow-200 p-4 rounded-2xl text-[20px] font-bold w-[20%] active:bg-yellow-300 transition-all'>
						Explore Now
					</button>
				</div>
			</div>

			<div className='container mx-auto p-4'>
				<div className='flex justify-evenly'>
					<div
						className='w-[682px] h-[367px] flex justify-center flex-col p-[54px]'
						style={{
							backgroundImage: `url(${bgImgone})`,
							backgroundSize: '100% 100%',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
						}}
					>
						<p className='font-yellowtail text-[36px] text-oqrang'>Natural!!</p>
						<h3 className='font-extrabold text-[40px] text-oqrang w-[277px]'>
							Get Garden Fresh Fruits
						</h3>
					</div>
					<div
						className='w-[682px] h-[367px] flex justify-center flex-col p-[54px]'
						style={{
							backgroundImage: `url(${bgImgtwo})`,
							backgroundSize: '100% 100%',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
						}}
					>
						<p className='text-yashil font-yellowtail text-[36px]'> Offer!!</p>
						<h3 className='text-kok font-bold text-[40px] w-[277px]'>
							Get 10% off on Vegetables
						</h3>
					</div>
				</div>
			</div>

			<div className='bg-gray-100'>
				<div className='flex items-center justify-evenly'>
					<img src={limon} className='h-[867px] ' alt='' />
					<div className='flex flex-col w-[702px]'>
						<p className='font-yellowtail text-[36px] text-yashil'>About Us</p>
						<h2 className='font-extrabold text-[50px] text-kok'>
							We Believe in Working Accredited Farmers
						</h2>
						<p className='font-normal text-kok text-[18px]'>
							Simply dummy text of the printing and typesetting industry. Lorem
							had ceased to been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley.
						</p>
						<div className='w-[564px] flex flex-col gap-[30px] py-[46px]'>
							<div className='flex gap-[19px] '>
								<img
									src={leaf}
									className='bg-oqrang max-w-[101px] p-[25px] rounded-3xl'
									alt=''
								/>
								<div>
									<h6 className='font-bold text-kok text-[25px]'>
										Organic Foods Only
									</h6>
									<p className='font-normal text-kok text-[18px]'>
										Simply dummy text of the printing and typesetting industry.
										Lorem Ipsum
									</p>
								</div>
							</div>
							<div className='flex gap-[19px]'>
								<img
									className='bg-oqrang max-w-[101px] p-[25px] rounded-3xl'
									src={latterbox}
									alt=''
								/>
								<div>
									<h6 className='font-bold text-kok text-[25px]'>
										Quality Standards
									</h6>
									<p className='font-normal text-kok text-[18px]'>
										Simply dummy text of the printing and typesetting industry.
										Lorem Ipsum
									</p>
								</div>
							</div>
						</div>
						<button className='text-[20px] font-bold bg-kok hover:bg-kokrangHover rounded-3xl  w-[220px] h-[20%] text-oqrang'>
							<p className='p-5'>Shop Now</p>
						</button>
					</div>
				</div>
			</div>

			<div className='mb-[400px] bg-white'>
				<div className='container mx-auto p-4'>
					<p className='text-center text-[36px] font-yellowtail text-yashil'>
						Categories{' '}
					</p>
					<h3 className='text-center text-[50px] font-extrabold text-kok'>
						Our Products
					</h3>
<<<<<<< HEAD
					{loading && <p role="status" className='text-center'>Loading products...</p>}

					{error && <p role="alert" className='text-center'>{error}</p>}

					{!loading && !error && filteredProducts.length === 0 && (
						<p className='text-center'>No products found.</p>
					)}

					<div className='flex flex-wrap items-center justify-center'>
						{!loading && !error && filteredProducts.slice(0, 12).map(item => (

							<Link key={item.id} to={`/home/shopsingle/${item.id}`}>
								<div id={item.id} className='w-[335px] flex p-[30px] flex-col gap-2 items-center' >
								<img className='h-[324px]' src={item.image} alt='' />
								<h5>{item.title}</h5>
								<div className="flex relative  gap-2 before:content-[''] before:block before:w-full before:h-[2px] before:bg-Ochkulrang before:absolute ">
									<div className='flex'>
										<p>${item.Price}</p>
									</div>
								<div className='flex items-center gap-2'>
									<div className='flex'>
 {[1, 2, 3, 4, 5].map((star) => (
	 <Star
	 key={star}
	 size={18}
	 fill="#FFA500"
	 color="#FFA500"
	 />
	))}
=======
					<div className='flex flex-wrap items-center justify-center bg-white gap-10 	'>
						{filteredProduct.slice(0, 12).map(item => (
							<Link key={item.id} to={`/home/shopsingle/${item.id}`}>
								<div
									id={item.id}
									className='w-[335px] flex p-[30px] flex-col gap-2 items-center bg-[#F9F8F8] relative rounded-3xl'
								>
									<span className='absolute top-10 left-10 py-[5px] px-[12px] bg-kok text-oqrang rounded-[10px] font-semibold text-[15px]'>
										{item.category}
									</span>
									<img className='h-[324px]' src={item.image} alt='' />
									<h5>{item.title}</h5>
									<div className="flex relative  gap-2 before:content-[''] before:block before:w-full before:h-0.5 before:bg-Ochkulrang before:absolute ">
										<div className='flex gap-2'>
											{item.oldPrice && (
												<p className='line-through text-gray-400'>
													${item.oldPrice}
												</p>
											)}
											<p className='font-bold'>${item.price}</p>
										</div>
										<div className='flex items-center gap-2'>
											<div className='flex'>
												{[1, 2, 3, 4, 5].map(star => (
													<Star
														key={star}
														size={18}
														fill='#FFA500'
														color='#FFA500'
													/>
												))}
											</div>
										</div>
>>>>>>> 0edf308de69059d7e36258a55e243f20593c272c
									</div>
								</div>
							</Link>
						))}

						<Link to={'/about'}>
							
							<button className='bg-kok hover:bg-kokrangHover text-[20px] text-oqrang font-bold py-[20px] px-[40px] rounded-3xl'>
								Load More
							</button>
						</Link>
					</div>
				</div>
			</div>

			<div className='bg-kok ]'>
				<div className='container mx-auto p-4'>
					<div className='flex justify-between items-center'>
						<div className='flex flex-col gap-[8px] '>
							<p className='font-yellowtail text-[36px] text-yashil'>Offer</p>
							<h3 className='capitalize text-oqrang font-extrabold text-[50px]'>
								We offer organic for you
							</h3>
						</div>
						<button className='text-kok py-[28px] bg-sariq rounded-3xl w-[256px] text-[20px] font-bold'>
							View All Product
						</button>
					</div>
					<div className='flex  gap-20 mt-[100px] mb-[200px]'>
						{filteredProduct.slice(0, 4).map(item => (
							<Link key={item.id} to={`/home/shopsingle/${item.id}`}>
								<div
									id={item.id}
									className='w-[335px] flex p-[30px] flex-col gap-2 items-center bg-[#F9F8F8] relative rounded-3xl'
								>
									<span className='absolute top-10 left-10 py-[5px] px-[12px] bg-kok text-oqrang rounded-[10px] font-semibold text-[15px]'>
										{item.category}
									</span>
									<img className='h-[324px]' src={item.image} alt='' />
									<h5>{item.title}</h5>
									<div className="flex relative    gap-2 before:content-[''] before:block before:w-full before:h-0.5 before:bg-Ochkulrang before:absolute ">
										<div className='flex gap-2 '>
											{item.oldPrice && (
												<p className='line-through text-gray-400'>
													${item.oldPrice}
												</p>
											)}
											<p className='font-bold'>${item.price}</p>
										</div>
										<div className='flex items-center gap-2'>
											<div className='flex'>
												{[1, 2, 3, 4, 5].map(star => (
													<Star
														key={star}
														size={18}
														fill='#FFA500'
														color='#FFA500'
													/>
												))}
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			<div
				className='relative max-h-[931px] overflow-hidden '
				data-aos='fade-up'
			>
				<div>
					<img className='w-[50%] object-contain h-full' src={garden} alt='' />
				</div>
				<div className='absolute top-[100px] max-w-[700px] p-[30px] right-[260px] bg-white rounded-[30px]'>
					<p className='font-yellowtail text-yashil text-[36px]'>
						Eco Friendly
					</p>
					<h4 className='font-extrabold text-[50px] text-kok'>
						Econis is a Friendly Organic Store
					</h4>
					<ul className='flex flex-col gap-10 max-w-[625px]'>
						<li>
							<h6 className='text-kok text-[25px] font-medium'>
								Start with Our Company First
							</h6>
							<p className='text-kok text-[16px] font-sans'>
								Sed ut perspiciatis unde omnis iste natus error sit voluptat
								accusantium doloremque laudantium. Sed ut perspiciatis.
							</p>
						</li>
						<li>
							<h6 className='text-kok text-[25px] font-medium'>
								Learn How to Grow Yourself
							</h6>
							<p className='text-kok text-[16px] font-sans'>
								Sed ut perspiciatis unde omnis iste natus error sit voluptat
								accusantium doloremque laudantium. Sed ut perspiciatis.
							</p>
						</li>
						<li>
							<h6 className='text-kok text-[25px] font-medium'>
								Farming Strategies of Today
							</h6>
							<p className='text-kok text-[16px] font-sans'>
								Sed ut perspiciatis unde omnis iste natus error sit voluptat
								accusantium doloremque laudantium. Sed ut perspiciatis.
							</p>
						</li>
					</ul>
				</div>
			</div>

			<div className='flex gap-[20px] p-[187px] bg-[#F1F8F4]'>
				<Link to={'/organicfood'}>
					<div className='relative max-w-[612px] max-h-[583px] overflow-hidden'>
						<img className='object-contain' src={OrganicJuise} alt='' />
						<button className='absolute  rounded-[20px] text-[25px] p-[20px] bg-white z-10 text-kok top-50 left-30'>
							Organic Juise
						</button>
					</div>
				</Link>
				<Link to={'/organicjuice'}>
					<div className='relative max-w-[612px] max-h-[583px] overflow-hidden'>
						<img className='object-contain' src={OrganicFood} alt='' />
						<button className='absolute rounded-[20px] text-[25px] p-[20px] bg-white z-10 text-kok top-50 left-35'>
							Organic Food
						</button>
					</div>
				</Link>
				<Link to={'/cookisjuice'}>
					<div className='relative max-w-[612px] max-h-[583px] overflow-hidden'>
						<img className='object-contain' src={NutsCookis} alt='' />
						<button className='absolute rounded-[20px] text-[25px] p-[20px] bg-white z-10 text-kok top-50 left-35'>
							Nuts Cookis
						</button>
					</div>
				</Link>
			</div>

			<div>
				<div className='container mx-auto p-4'>
					<div className='flex justify-between items-center mb-[50px]'>
						<div className='max-w-[702px]'>
							<p className='font-yellowtail text-[36px]'>News</p>
							<h5 className='text-[50px] font-extrabold'>
								Discover weekly content about organic food, & more
							</h5>
						</div>
						<button className='font-bold text-[20px] border-2 border-Ochkulrang bg-oqrang py-[28px] hover:rounded-[30px] transition-all w-[220px]'>
							More News
						</button>
					</div>
					<div className='relative flex justify-between items-center'>
						<div className='overflow-hidden flex gap-37 items-center'>
							<img data-aos="fade-right" className='object-contain' src={SalatLeafs} alt='' />
							<img data-aos="fade-left" className='object-contain' src={Tometos} alt='' />
						</div>
					<div className='absolute top-0'>
						<div className='w-[613px] h-[524px]'>gggg</div>
						<div className='w-[613px] h-[524px]'><ggggggg></ggggggg></div>
					</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
