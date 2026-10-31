 import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="w-full bg-white font-sans text-[#525C60]">
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 items-start gap-12 text-center md:text-left">
                <div className="md:text-right flex flex-col gap-4">
                    <h3 className="text-[#274C5B] text-2xl font-bold">Contact Us</h3>
                    <div>
                        <h4 className="font-bold text-[#274C5B] text-sm">Email</h4>
                        <p className="text-sm mt-1">needhelp@Organia.com</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#274C5B] text-sm">Phone</h4>
                        <p className="text-sm mt-1">666 888 888</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#274C5B] text-sm">Address</h4>
                        <p className="text-sm mt-1">88 road, borklyn street, USA</p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center px-0 md:px-12 md:border-x border-gray-200 min-h-[220px] justify-center gap-6">
                    <div className="flex items-center gap-2 justify-center">
                        <div className="w-7 h-7 bg-[#7EB693] rounded-full flex items-center justify-center text-white text-xs font-bold">O</div>
                        <span className="text-[#274C5B] text-3xl font-extrabold tracking-tight">Organick</span>
                    </div>
                    <p className="text-sm max-w-sm leading-relaxed">
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing.
                    </p>
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#F4F6F5] hover:bg-[#7EB693] hover:text-white transition-colors flex items-center justify-center text-[#274C5B]">
                            <FaInstagram size={16} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#F4F6F5] hover:bg-[#7EB693] hover:text-white transition-colors flex items-center justify-center text-[#274C5B]">
                            <FaFacebookF size={16} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#F4F6F5] hover:bg-[#7EB693] hover:text-white transition-colors flex items-center justify-center text-[#274C5B]">
                            <FaTwitter size={16} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#F4F6F5] hover:bg-[#7EB693] hover:text-white transition-colors flex items-center justify-center text-[#274C5B]">
                            <FaPinterestP size={16} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-left pl-0 md:pl-6">
                    <h3 className="text-[#274C5B] text-2xl font-bold text-center md:text-left">Utility Pages</h3>
                    <ul className="flex flex-col gap-3 text-sm text-center md:text-left">
                        <li><a href="#" className="hover:text-[#7EB693] transition-colors">Style Guide</a></li>
                        <li><a href="#" className="hover:text-[#7EB693] transition-colors">404 Not Found</a></li>
                        <li><a href="#" className="hover:text-[#7EB693] transition-colors">Password Protected</a></li>
                        <li><a href="#" className="hover:text-[#7EB693] transition-colors">Licences</a></li>
                        <li><a href="#" className="hover:text-[#7EB693] transition-colors">Changelog</a></li>
                    </ul>
                </div>
            </div>
 <div className="w-full border-t border-gray-100 py-5 text-center text-sm">
                <p>Copyright © <span className="font-bold text-[#274C5B]">Organick</span></p>
            </div>
        </footer>
    );
};

export default Footer;