import React from 'react'
import apelsin2 from '../assets/apelsin2.png'
import bana from '../assets/banana.png'
import barg from '../assets/barg.png'
import { Mail, PhoneCall, MapPin } from 'lucide-react'

const Contacts = () => {
    return (
        <div>
            <div className="w-full mx-auto">
                <div className="h-[450px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${apelsin2})` }} xxx>
                    <h1 className="text-[#274C5B] text-5xl md:text-7xl font-extrabold tracking-tight font-sans">
                        Contact Us
                    </h1>
                </div>
            </div>
            <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-[50px] py-20 px-4">
                <div className="flex-shrink-0">
                    <img src={bana} alt="Banana" className="w-full max-w-[500px] h-auto object-cover rounded-2xl" />
                </div>
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#274C5B] font-sans leading-tight mb-4">
                        We'd love to talk about how we can work together.
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg"> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-center w-14 h-14 bg-[#F4F6F4] rounded-xl text-[#7BB87B] flex-shrink-0">
                                <Mail className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#274C5B] font-sans">
                                    Message
                                </h3>
                                <p className="text-gray-500 font-medium text-sm mt-0.5">
                                    support@organic.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-center w-14 h-14 bg-[#F4F6F4] rounded-xl text-[#7BB87B] flex-shrink-0">
                                <PhoneCall className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#274C5B] font-sans">
                                    Contact Us
                                </h3>
                                <p className="text-gray-500 font-medium text-sm mt-0.5">
                                    +01 123 456 789
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full mx-auto">
                    <div className="h-[650px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${barg})` }} xxx>
                        <div className=" ml-[800px] max-w-[450px] bg-white p-12 rounded-[40px] shadow-sm border border-gray-100/50">
                            <div className="mb-6">
                                <span className="text-[#7BB87B] text-2xl font-serif italic block mb-1">
                                    Location
                                </span>
                                <h2 className="text-[#274C5B] text-[40px] font-extrabold tracking-tight font-sans leading-none">
                                    Our Farms
                                </h2>
                            </div>
                            <p className="text-gray-500 text-base leading-relaxed mb-10 font-sans">
                                Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-4 items-start">
                                    <div className="flex items-center justify-center w-[52px] h-[52px] bg-[#F4F6F4] rounded-xl text-[#7BB87B] flex-shrink-0">
                                        <MapPin className="w-6 h-6 stroke-[1.5]" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-lg font-bold text-gray-600 font-sans">
                                            New York, USA:
                                        </h4>
                                        <p className="text-gray-500 text-sm mt-1 font-medium leading-relaxed">
                                            299 Park Avenue New York,<br />
                                            New York 10171
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="flex items-center justify-center w-[52px] h-[52px] bg-[#F4F6F4] rounded-xl text-[#7BB87B] flex-shrink-0">
                                        <MapPin className="w-6 h-6 stroke-[1.5]" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-lg font-bold text-gray-600 font-sans">
                                            London, UK:
                                        </h4>
                                        <p className="text-gray-500 text-sm mt-1 font-medium leading-relaxed">
                                            30 Stamford Street,<br />
                                            London SE1 9LQ
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="w-full max-w-[1200px] mx-auto p-4 md:p-10 bg-[tarnsparent]">
                    <form className="space-y-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-3">
                                <label className="text-[#274C5B] font-bold text-lg font-sans">
                                    Full Name*
                                </label>
                                <input type="text" placeholder="Your Email Address" className="w-full h-[65px] px-6 rounded-2xl border-2 border-gray-100 bg-white text-gray-700 placeholder-gray-300 italic focus:outline-none focus:border-[#7EB693] transition" required />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-[#274C5B] font-bold text-lg font-sans">
                                    Your Email*
                                </label>
                                <input type="email" placeholder="example@yourmail.com" className="w-full h-[65px] px-6 rounded-2xl border-2 border-gray-100 bg-white text-gray-700 placeholder-gray-300 italic focus:outline-none focus:border-[#7EB693] transition" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-3">
                                <label className="text-[#274C5B] font-bold text-lg font-sans">
                                    Company*
                                </label>
                                <input type="text" placeholder="yourcompany name here" className="w-full h-[65px] px-6 rounded-2xl border-2 border-gray-100 bg-white text-gray-700 placeholder-gray-300 italic focus:outline-none focus:border-[#7EB693] transition" required />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-[#274C5B] font-bold text-lg font-sans">
                                    Subject*
                                </label>
                                <input type="text" placeholder="how can we help" className="w-full h-[65px] px-6 rounded-2xl border-2 border-gray-100 bg-white text-gray-700 placeholder-gray-300 italic focus:outline-none focus:border-[#7EB693] transition" required />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[#274C5B] font-bold text-lg font-sans">
                                Message*
                            </label>
                            <textarea rows="7" placeholder="hello there,i would like to talk about how to..." className="w-full px-6 py-5 rounded-2xl border-2 border-gray-100 bg-white text-gray-700 placeholder-gray-300 italic focus:outline-none focus:border-[#7EB693] transition resize-none" required></textarea>
                        </div>
                        <div className="pt-2">
                            <button type="submit" className="px-10 py-5 bg-[#274C5B] hover:bg-[#1e3b47] text-white font-bold text-lg rounded-2xl shadow-sm transition active:scale-[0.98]"> Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contacts
