import { Link  } from 'react-router-dom'
import { Search , ShoppingCart } from 'lucide-react'
import Img from '../assets/Logo (2).svg'
const Header = () => {
	return (
		<>
			<div>
				<div className='container mx-auto p-4'>
					<div className='flex justify-between py-10'>
					<div className='flex items-center gap-20'>
						<img src={Img} alt='' />
						<ul className='flex gap-[10px]'>
							<li>
								<Link>Home</Link>
							</li>
							<li>
								<Link>Aboute</Link>
							</li>
							<li>
								<details className='flex '>
									<summary className=''>Pages</summary>
									<Link>Aboute</Link>
									<Link>Shop</Link>
									<Link>Service</Link>
									<Link>Projects</Link>
									<Link>News</Link>
								</details>
							</li>
							<li>
								<Link>Shop</Link>
							</li>
							<li>
								<Link>Projects</Link>
							</li>
							<li>
								<Link>News</Link>
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
