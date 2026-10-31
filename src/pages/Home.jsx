import Img from '../assets/bgGroundHome.png'
import bgImgone from '../assets/bgimgone.png'
import bgImgtwo from '../assets/bgimgtwo.png'
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

			<div className='bg-Ochkulrang'>
				<div>
					<img src='' alt='' />
					<div>
						<p></p>
						<h2></h2>
						<p></p>
						<div>
							<div>
								<img src='' alt='' />
								<h6></h6>
								<p></p>
							</div>
							<div>
								<img src="" alt="" />
								<h6></h6>
								<p></p>
							</div>
						</div>
						<button className='text-[20px] font-bold bg-kok rounded-3xl py-[78px] px-[50px]'>SHop Now</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
