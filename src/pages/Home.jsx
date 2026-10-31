import Img from '../assets/bgGroundHome.png'
import bgImgone from '../assets/bgimgone.png'
import bgImgtwo from '../assets/bgimgtwo.png'
import latterbox from '../assets/latterbox.svg'
import leaf from '../assets/leaf.svg'
import limon from '../assets/Limon.png'
const Home = () => {
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
								<img src={leaf} className='bg-oqrang max-w-[101px] p-[25px] rounded-3xl' alt='' />
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
								<img className='bg-oqrang max-w-[101px] p-[25px] rounded-3xl'  src={latterbox} alt='' />
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
						<button className='text-[20px] font-bold bg-kok rounded-3xl  w-[20%] h-[20%] text-oqrang'>
							SHop Now
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
