
import { Link } from 'react-router-dom'
import { Search, Menu, ShoppingCart, UserRound } from 'lucide-react'
import { useState } from 'react'
import Img from '../assets/Logo (2).svg'


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between gap-6">

          <Link to="/">
            <img src={Img} alt="Logo" className="w-[170px] object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-semibold text-[#274C3B]">
            <Link to="/" className="hover:text-[#7EB693] transition-colors">
              Home
            </Link>

            <Link to="/about" className="hover:text-[#7EB693] transition-colors">
              About
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#7EB693]">
                Pages <span>⌄</span>
              </button>

              <div className="absolute top-full left-0 z-50 hidden group-hover:flex flex-col min-w-[180px] rounded-xl bg-white shadow-xl border border-gray-100 py-3">
                {[
                  ['About', '/about'],
                  ['Shop', '/shop'],
                  ['Service', '/service'],
                  ['Projects', '/projects'],
                  ['News', '/news']
                ].map(([name, path]) => (
                  <Link
                    key={path}
                    to={path}
                    className="px-5 py-2 hover:bg-[#EFF6F1] hover:text-[#7EB693]"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/shop" className="hover:text-[#7EB693] transition-colors">
              Shop
            </Link>

            <Link to="/projects" className="hover:text-[#7EB693] transition-colors">
              Projects
            </Link>

            <Link to="/news" className="hover:text-[#7EB693] transition-colors">
              News
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center bg-[#FAFAFA] rounded-full p-1 pl-5 border border-gray-100">
              <input
                type="text"
                placeholder="Search..."
                className="w-[150px] bg-transparent outline-none text-sm text-[#274C3B]"
              />
              <button className="bg-[#7EB693] text-white p-3 rounded-full hover:bg-[#609E79] transition-colors">
                <Search size={20} />
              </button>
            </div>

            <button className="hidden sm:flex items-center gap-2 border border-gray-200 rounded-full p-2 pr-4 hover:bg-gray-50">
              <span className="bg-[#274C3B] text-white rounded-full p-2">
                <ShoppingCart size={19} />
              </span>
              <span className="font-semibold text-[#274C3B] text-sm">
                Cart
              </span>
            </button>

            <button className="hidden sm:flex p-3 rounded-full bg-[#EFF6F1] text-[#274C3B]">
              <UserRound size={21} />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-[#274C3B]"
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden flex flex-col gap-4 mt-5 p-5 bg-[#F7FAF8] rounded-2xl font-semibold text-[#274C3B]">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
            <Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/news" onClick={() => setMenuOpen(false)}>News</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
