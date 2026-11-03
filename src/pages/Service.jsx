
import React from 'react'
import banner from '../assets/banner3.png'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import pac from '../assets/pac.png'
import gulfon from '../assets/gulfon.jpg'

const Service = () => {
  return (
    <div className="w-full min-h-screen bg-white">

      <div className="relative w-full flex justify-center items-center">
        <img
          src={banner}
          alt="Banner"
          className="w-full object-cover h-[300px]"
        />
        <p className="absolute text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Services
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center">

        <div className="text-center mb-12">
          <span className="text-green-600 italic font-serif text-lg">
            What we Grow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">
            Better Agriculture for <br /> Better Future
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 w-full">

          <div className="flex flex-col gap-10 text-right">
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
            <img
              src={pac}
              alt="PAC"
              className="max-w-[300px] md:max-w-[350px] object-contain drop-shadow-xl"
            />
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
            <span>Shop</span>
            <span>→</span>
          </Link>
        </div>

        <section
          className="relative w-full min-h-[350px] md:min-h-[450px] bg-cover bg-center rounded-2xl overflow-hidden mt-16 flex items-center justify-center"
          style={{ backgroundImage: `url(${gulfon})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10 text-center px-4">
            <span className="text-green-700 italic font-serif text-lg">
              Organic Only
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-[#274C5B] mt-3">
              Everyday Fresh & Clean
            </h1>

            <p className="text-slate-700 mt-4 text-sm md:text-base">
              Natural products for a healthier life
            </p>

            <Link
              to="/shop"
              className="inline-block mt-6 bg-[#274C5B] text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
            >
              Explore Now →
            </Link>
          </div>
        </section>

      </div>

      <footer className="w-full bg-[#274C5B] text-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="text-center md:text-right md:border-r border-gray-500 md:pr-10">
            <h2 className="text-2xl font-bold mb-5">Contact Us</h2>
            <p className="text-gray-300 mb-3">Email</p>
            <p className="mb-5">info@organick.com</p>
            <p className="text-gray-300 mb-3">Phone</p>
            <p className="mb-5">+01 123 456 789</p>
            <p className="text-gray-300 mb-3">Address</p>
            <p>24 Street, New York, USA</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-5">
              Organ<span className="text-green-400">ick</span>
            </h2>

            <p className="text-gray-300 leading-7">
              We provide fresh, organic and natural products
              for a healthier and happier life.
            </p>

            <div className="flex justify-center gap-5 mt-7">
              <span className="bg-white/10 p-3 rounded-full">📘</span>
              <span className="bg-white/10 p-3 rounded-full">📸</span>
              <span className="bg-white/10 p-3 rounded-full">🐦</span>
            </div>
          </div>

          <div className="text-center md:text-left md:border-l border-gray-500 md:pl-10">
            <h2 className="text-2xl font-bold mb-5">Pages</h2>

            <div className="flex flex-col gap-4 text-gray-300">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-500 py-5 text-center text-gray-300 text-sm">
          Copyright © 2026 Organick. All Rights Reserved.
        </div>
      </footer>

    </div>
  )
}

export default Service
