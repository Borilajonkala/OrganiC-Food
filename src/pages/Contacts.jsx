import { useState } from 'react'
import apelsin2 from '../assets/apelsin2.png'
import bana from '../assets/banana.png'
import barg from '../assets/barg.png'
import { Mail, PhoneCall, MapPin } from 'lucide-react'

const Contacts = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const telegramToken = '9159236976:AAHi2Mi_Zy27tojYtGNPqNT_EstRcJQihqQ'; // Sizning bot tokeningiz
        const chatId = '5012910966'; // Sizning Telegram ID raqamingiz
        const text = `📩 Saytdan yangi murojaat!\n\n` +
                     `👤 F.I.Sh: ${formData.fullName}\n` +
                     `📧 Email: ${formData.email}\n` +
                     `🏢 Kompaniya: ${formData.company}\n` +
                     `📌 Mavzu: ${formData.subject}\n` +
                     `💬 Xabar: ${formData.message}`;

        const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                }),
            });
            if (response.ok) {
                alert('Xabaringiz Ibrohimga muvaffaqiyatli yuborildi! 👍');
                setFormData({ fullName: '', email: '', company: '', subject: '', message: '' });
            } else {
                alert('Xabarni yuborishda xatolik yuz berdi. Qayta urinib ko‘ring.');
            }
        } catch (error) {
            console.error('Xatolik:', error);
            alert('Tarmoq ulanishida xatolik yuz berdi.');
        }
    };

    return (
        <div>
            <div className="w-full mx-auto">
                <div className="h-[450px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${apelsin2})` }}>
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
                    <div className="h-[650px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${barg})` }}>
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
                <div className="w-full max-w-[1200px] mx-auto p-4 md:p-10 bg-[transparent]">
                    <form onSubmit={handleSubmit} className="space-y-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="fullName" className="text-[#274C5B] font-bold text-lg font-sans">
                                    Full Name*
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    name="fullName"
                                    placeholder="Your Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full h-[65px] px-6 rounded-2xl border-2 border-gray-100 bg-white text-gray-700 placeholder-gray-300 italic focus:outline-none focus:border-[#7EB693] transition"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="email" className="text-[#274C5B] font-bold text-lg font-sans">
                                    Your Email*
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-[65px] px-6 rounded-2xl border-2 border-gray-100 bg-white text-gray-700 placeholder-gray-300 italic focus:outline-none focus:border-[#7EB693] transition"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="company" className="text-[#274C5B] font-bold text-lg font-sans">
                                    Company*
                                </label>
                                <input
                                    id="company"
                                    type="text"
                                    name="company"
                                    placeholder="Your Company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full h-[65px] px-6 rounded-2xl border-2 border-gray-100 bg-white text-gray-700 placeholder-gray-300 italic focus:outline-none focus:border-[#7EB693] transition"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="subject" className="text-[#274C5B] font-bold text-lg font-sans">
                                    Subject*
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Your Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full h-[65px] px-6 rounded-2xl border-2 border-gray-100 bg-white text-gray-700 placeholder-gray-300 italic focus:outline-none focus:border-[#7EB693] transition"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="message" className="text-[#274C5B] font-bold text-lg font-sans">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-6 rounded-2xl border-2 border-gray-100 bg-white text-gray-700 placeholder-gray-300 italic focus:outline-none focus:border-[#7EB693] transition resize-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-10 h-[60px] rounded-2xl bg-[#274C5B] text-white font-bold text-lg font-sans hover:bg-[#1d3a45] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contacts
