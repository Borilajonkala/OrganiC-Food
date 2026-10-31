import { Star } from 'lucide-react'
import Img from '../assets/bgGroundHome.png'
import bgImgone from '../assets/bgimgone.png'
import bgImgtwo from '../assets/bgimgtwo.png'
import latterbox from '../assets/latterbox.svg'
import leaf from '../assets/leaf.svg'
import limon from '../assets/Limon.png'
// rasmlar

import { useFetchContext } from '../Context/useFetchContext'

const Home = () => {
	const { product, loading, error } = useFetchContext()
	console.log(product);
	// console.log(loading);
	// console.log(error);

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
				<div className='p-[300px] flex flex-col gap-2 '>
					<p className='text-[36px] font-yellowtail text-yashil'>
						100% Natural Food
					</p>
					<h1 className='text-kok w-[530px] text-[70px] font-extrabold'>
						Choose the best healthier way of life
					</h1>
					<button className='bg-sariq  p-4 rounded-2xl text-[20px] font-bold w-[10%] active:bg-yellow-300 transition-all'>
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
						<button className='text-[20px] font-bold bg-kok rounded-3xl  w-[220px] h-[20%] text-oqrang'>
							<p className='p-5'>Shop Now</p>
						</button>
					</div>
				</div>
			</div>

			<div>
				<div className='container mx-auto p-4'>
					<p className='text-center text-[36px] font-yellowtail text-yashil'>
						Categories{' '}
					</p>
					<h3 className='text-center text-[50px] font-extrabold text-kok'>
						Our Products
					</h3>
					<div className='flex flex-wrap items-center justify-center'>
						{product.map(item => (
							<div id={item.id} className='w-[335px] flex p-[30px] flex-col gap-2 items-center' >
								<span></span>
							<img className='h-[324px]' src={item.image} alt='' />
								<h5>{item.title}</h5>
								<div className="flex relative  gap-2 before:content-[''] before:block before:w-full before:h-[2px] before:bg-Ochkulrang before:absolute ">
									<div className='flex'>
									<p>$?</p>
									<p>$?</p>
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
									</div>
									<span>{item.Price}	</span>
								</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
