import logo from '../assets/apelsinBackground.png'
const BottomCom = () => {
	return (
		<>
			<div
				className='rounded-3xl w-[1400px] h-[323px] '
				style={{
					
					backgroundImage: `url(${logo})`,
				backgroundSize: '100% 100%',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className='flex items-center px-20 justify-between h-full p-[50px]'>
					<h5 className='text-[50px] text-oqrang w-[357px] font-bold'>
						Subscribe to our Newsletter
					</h5>
					<div className='flex gap-2'>
						<input type='email' className='py-[40px] pl-[23px] border-none bg-oqrang rounded-3xl pr-[174px] ' placeholder='Enter Your Email' />
						<button className='text-[20px] text-oqrang bg-kok rounded-3xl py-[28px] px-[64px]'>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default BottomCom
