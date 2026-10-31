import { Link } from 'react-router-dom'
import { Search, ShoppingCart, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Img from '../assets/Logo (2).svg'
const Header = () => {
	const [open , setOpen] = useState(false)

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
									<Link className='font-bold text-[20px]' to={'/about'}>Aboute</Link>
								</li>
						<li className="relative">
  <button
    onClick={() => setOpen(!open)}
    className="flex items-center gap-1 font-bold text-[20px]"
  >
    Pages
    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        open ? 'rotate-180' : ''
      }`}
    />
  </button>

  {open && (
    <div className="absolute left-0 top-full z-50 mt-3 flex w-[200px] flex-col gap-2 rounded-xl bg-white p-4 shadow-lg">
      <Link className="font-bold text-[16px] hover:text-[#7EB693]" to="/about">
        About
      </Link>

      <Link className="font-bold text-[16px] hover:text-[#7EB693]" to="/shop">
        Shop
      </Link>

      <Link
        to="/shopsingle"
        className="font-bold text-[16px] hover:text-[#7EB693]"
      >
        Shop Single
      </Link>

      <Link
        className="font-bold text-[16px] hover:text-[#7EB693]"
        to="/service"
      >
        Service
      </Link>

      <Link className="font-bold text-[16px] hover:text-[#7EB693]" to="/projects">
        Projects
      </Link>

      <Link className="font-bold text-[16px] hover:text-[#7EB693]" to="/news">
        News
      </Link>
    </div>
  )}
</li>
								<li>
									<Link className='font-bold text-[20px]' to={'shop'}>Shop</Link>
								</li>
							
								<li>
									<Link className='font-bold text-[20px] ' to={'/service'}>Service</Link>
								</li>
									<li>
									<Link className='font-bold text-[20px]'  >Projects</Link>
								</li>
								<li>
									<Link className='font-bold text-[20px]'  >News</Link>
								</li>
							</ul>
						</div>
						<div className='flex gap-20 items-center'>
							<div className='bg-#7EB693 relative'>
								<input type="text" className='w-[376px] h-[66px] rounded-4xl bg-[#FAFAFA] border-2 border-Ochkulrang pl-4 z-10 ' />
								<button className='rounded-full bg-yashil p-[20px] text-oqrang absolute right-[5px] top-[2.5px] z-0'><Search size={21} /></button>
							</div>
							<div className='flex gap-4 items-center border-2 border-Ochkulrang rounded-full pl-[3px] pr-[20px] py-[3px]'>
								<button className='rounded-full bg-kok p-5 text-oqrang'><ShoppingCart /></button>
								<span className='text-[18px]'>Cart ({ })</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
