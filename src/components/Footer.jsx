import { Link } from 'lucide-react'
import { FaInstagram, FaPinterest, FaTelegram, FaTwitter } from 'react-icons/fa'
import Img from '../assets/Logo (2).svg'
const Footer = () => {
	return (
		<>
			<div className="flex justify-around ">
				<div className="flex flex-col after:contact: [''] after:block before:w-full after:h-2 after:bg-Ochkulrang after:absolute relative">
					<h6>Contact Us</h6>
					<div>
						<h5 className='text-end text-[18px] font-bold'>Email</h5>
						<p className='text-end text-[18px]'>Batman@gmail.com</p>
					</div>
					<div>
						<h5 className='text-end text-[18px] font-bold'>Phone</h5>
						<p className='text-end text-[18px]'>8888 5555 8888</p>
					</div>
					<div>
						<h5 className='text-end text-[18px] font-bold'>Address</h5>
						<p className='text-end text-[18px]'>88 road, borklyn street, USA</p>
					</div>
				</div>
				<div className='flex flex-col gap-10 items-center w-[543px]'>
					<img src={Img} alt='' />
					<p>
						Simply dummy text of the printing and typesetting industry. Lorem
						Ipsum simply dummy text of the printing
					</p>
					<div className='flex gap-5 '>
						<button className='rounded-full bg-yashil  p-4 '>
							<Link>
								<img color='[#274C5B]' src={FaInstagram} alt='' />
							</Link>
						</button>
						<button className='rounded-full bg-yashil  p-4 '>
							<Link>
								<img color='[#274C5B]' src={FaTelegram} alt='' />
							</Link>
						</button>
						<button className='rounded-full bg-yashil p-4  '>
							<Link>
								<img color='[#274C5B]' src={FaTwitter} alt='' />
							</Link>
						</button>
						<button className='rounded-full bg-yashil  p-4 '>
							<Link>
								<img color='[#274C5B]' src={FaPinterest} alt='' />
							</Link>
						</button>
					</div>
				</div>
				<div></div>
			</div>
		</>
	)
}

export default Footer
