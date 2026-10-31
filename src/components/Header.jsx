import { Link  } from 'react-router-dom'
import { Search , ShoppingCart } from 'lucide-react'
import Img from '../assets/Logo (2).svg'
const Header = () => {
	return (
		<>
			<div>
				<div className='container mx-auto p-4'>
					<div className='flex justify-between py-10'>
					<div className='flex items-center gap-5'>
					<Link to={'/'}>	<img src={Img} alt='' /></Link>
						<ul className='flex gap-[10px]'>
							<li>
								<Link to={"/"} className='font-bold text-[20px]'>Home</Link>
							</li>
							<li>
								<Link className='font-bold text-[20px]'>Aboute</Link>
							</li>
							<li>
								<details className='flex flex-col  '>
									<summary className='flex font-bold text-[20px]'>Pages</summary>
									<Link className='font-bold text-[20px]'>Aboute</Link>
									<Link className='font-bold text-[20px]'>Shop</Link>
									<Link className='font-bold text-[20px]'>Service</Link>
									<Link className='font-bold text-[20px]'>Projects</Link>
									<Link className='font-bold text-[20px]'>News</Link>
									<Link className='font-bold text-[20px]'>Service</Link>
								</details>
							</li>
							<li>
								<Link  className='font-bold text-[20px]'  to={'shop'}>Shop</Link>
							</li>
							<li>
								<Link className='font-bold text-[20px]'  >Projects</Link>
							</li>
							<li>
								<Link className='font-bold text-[20px]'  >News</Link>
							</li>
							<li>
								<Link className='font-bold text-[20px]'  >News</Link>
							</li>
							<li>
								<Link className='font-bold text-[20px]' to={'/service'}  >Service</Link>
							</li>
						</ul>
					</div>
				<div className='flex gap-20 items-center'>
					<div className='bg-#7EB693 relative'>
						<input type="text" className='w-[376px] h-[66px] rounded-4xl bg-[#FAFAFA] border-2 border-Ochkulrang pl-4 z-10 '  />
					<button className='rounded-full bg-yashil p-[20px] text-oqrang absolute right-[5px] top-[2.5px] z-0'><Search size={21}  /></button>
					</div>
					<div className='flex gap-4 items-center border-2 border-Ochkulrang rounded-full pl-[3px] pr-[20px] py-[3px]'>
						<button className='rounded-full bg-kok p-5 text-oqrang'><ShoppingCart /></button>
						<span className='text-[18px]'>Cart ({})</span>
					</div>
				</div>
				</div>
				</div>
			</div>
		</>
	)
}

export default Header
