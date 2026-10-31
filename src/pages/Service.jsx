import React from 'react'
import banner from '../assets/banner3.png'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import pac from '../assets/pac.png'

const Service = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      

      <div className="relative w-full flex justify-center items-center">
        <img src={banner} alt="Banner" className="w-full object-cover h-[300px]" />
        <p className="absolute text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Services
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center">
        <div className="text-center mb-12">
          <span className="text-green-600 italic font-serif text-lg">What we Grow</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">
            Better Agriculture for <br /> Better Future
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 w-full">
          <div className="flex flex-col gap-10 text-right md:text-right">
            <div>
              <div className="flex md:justify-end items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-800 text-lg">Dairy Products</h3>
                <span className="text-green-600 text-xl">🥛</span>
              </div>
              <p className="text-gray-500 text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
              </p>
            </div>

            <div>
              <div className="flex md:justify-end items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-800 text-lg">Store Services</h3>
                <span className="text-green-600 text-xl">🏪</span>
              </div>
              <p className="text-gray-500 text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
              </p>
            </div>

            <div>
              <div className="flex md:justify-end items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-800 text-lg">Delivery Services</h3>
                <span className="text-green-600 text-xl">🚚</span>
              </div>
              <p className="text-gray-500 text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={pac} alt="PAC" className="max-w-[300px] md:max-w-[350px] object-contain drop-shadow-xl" />
          </div>

          <div className="flex flex-col gap-10 text-left">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-600 text-xl">🌿</span>
                <h3 className="font-bold text-slate-800 text-lg">Agricultural Services</h3>
              </div>
              <p className="text-gray-500 text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-600 text-xl">🌾</span>
                <h3 className="font-bold text-slate-800 text-lg">Organic Products</h3>
              </div>
              <p className="text-gray-500 text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-600 text-xl">🌱</span>
                <h3 className="font-bold text-slate-800 text-lg">Fresh Vegetables</h3>
              </div>
              <p className="text-gray-500 text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <Link
            to="/shop"
            className="inline-flex border border-slate-700 text-slate-800 px-6 py-3 rounded-full font-medium hover:bg-slate-800 hover:text-white transition items-center gap-2"
          >
            <span>Shop</span> <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Service