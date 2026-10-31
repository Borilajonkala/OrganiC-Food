import Baner from '../assets/baner.png'
import Image from '../assets/image.png'
import photo from '../assets/Photo.jpg'
import photo1 from '../assets/1.png'
import photo2 from '../assets/2.png'
import photo3 from '../assets/3.png'
import kofe from '../assets/kofe.png'
import choy from '../assets/choy.png'
import anor from '../assets/anor.png'
import vegatable from '../assets/vegateble.png'
const About = () => {
  return (
    <div>
       
            <main>
                <section>
                    <div>
                        <img src={Baner} alt="" />
                        <div className='flex items-center justify-around'>
                            <img className='w-[650px]' src={Image} alt="" />
                            <div>
                                <h2 className='w-[674px] font-bold text-[50px]'>
                                We do Creative 
                                Things for Success
                                </h2>
                                <p className='w-[671px] p-[40px]'>
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                                </p>
                                <p className='w-[671px] p-[40px]'>
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                </p>
                                <button className='w-[230px] p-[28px] text-Ochkulrang bg-emerald-950 rounded-2xl'>Explore More</button>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg-[#faf6f6] py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="w-full md:w-1/2">
           

            <h1 className="text-[#354d59] text-3xl md:text-4xl font-bold leading-tight mb-5">
                We do not buy from the
                open market & traders.
            </h1>

            <p className="text-gray-500 text-sm leading-6 mb-6">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s,
                when an unknown.
            </p>

            <div className="flex flex-col gap-5">

                <div>
                    <div className="bg-[#f0ebeb] rounded-full px-5 py-5 w-fit min-w-[220px] flex items-center gap-2">
                        <span className="w-3 h-3 border-[3px] border-[#96b99a] rounded-full"></span>
                        <h2 className="text-[#354d59] font-semibold text-sm">
                            100% Natural Product
                        </h2>
                    </div>

                    <p className="text-gray-500 text-sm leading-6 ml-10 mt-2">
                        Simply dummy text of the printing and typesetting
                        <br />
                        industry Lorem Ipsum
                    </p>
                </div>

                <div>
                    <div className="bg-[#f0ebeb] rounded-full px-5 py-5 w-fit min-w-[220px] flex items-center gap-2">
                        <span className="w-3 h-3 border-[3px] border-[#96b99a] rounded-full"></span>
                        <h2 className="text-[#354d59] font-semibold text-sm">
                            Increases resistance
                        </h2>
                    </div>

                    <p className="text-gray-500 text-sm leading-6 ml-10 mt-2">
                        Filling, and temptingly healthy, our Biona Organic
                        <br />
                        Granola with Wild Berries is just the thing
                    </p>
                </div>

            </div>
        </div>

        <div className="w-full md:w-1/2">
            <img
                src={photo}
                alt="Natural vegetables"
                className="w-full h-[380px] object-cover rounded-[25px]"
            />
        </div>

    </div>
</section>

                    
```jsx
<section className="py-12 bg-white">
    <div className="container mx-auto px-5">

        <div className="text-center mb-10">
            <h1 className="text-[#354d59] text-3xl font-bold mb-3">
                Our Organic Experts
            </h1>

            <p className="text-gray-500 text-sm leading-6 max-w-2xl mx-auto">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">

            <div className="bg-[#faf6f6] rounded-2xl overflow-hidden shadow-sm">
                <img
                    src={photo1}
                    alt=""
                    className="w-full h-[320px] object-cover"
                />

                <div className="p-5">
                    <h2 className="text-[#354d59] font-bold text-lg">
                        Giovani Bacardo
                    </h2>

                    <div className="flex justify-between items-center">
                        <p className="text-[#96b99a] italic text-sm">
                            Farmer
                        </p>

                        <div className="flex gap-3 text-[#354d59]">
                            <span>●</span>
                            <span>♥</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#faf6f6] rounded-2xl overflow-hidden shadow-md">
                <img
                    src={photo2}
                    alt=""
                    className="w-full h-[320px] object-cover"
                />

                <div className="p-5">
                    <h2 className="text-[#354d59] font-bold text-lg">
                        Marianne Loreno
                    </h2>

                    <div className="flex justify-between items-center">
                        <p className="text-[#96b99a] italic text-sm">
                            Designer
                        </p>

                        <div className="flex gap-3 text-[#354d59]">
                            <span>◎</span>
                            <span>●</span>
                            <span>♥</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#faf6f6] rounded-2xl overflow-hidden shadow-sm">
                <img
                    src={photo3}
                    alt=""
                    className="w-full h-[320px] object-cover"
                />

                <div className="p-5">
                    <h2 className="text-[#354d59] font-bold text-lg">
                        Riga Pelore
                    </h2>

                    <div className="flex justify-between items-center">
                        <p className="text-[#96b99a] italic text-sm">
                            Farmer
                        </p>

                        <div className="flex gap-3 text-[#354d59]">
                            <span>◎</span>
                            <span>●</span>
                            <span>♥</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
            </section>


            ```jsx
<section className="bg-[#354d59] py-24">
    <div className="container mx-auto px-5">

        <div className="text-center mb-7">
            <h3 className="text-[#96b99a] italic font-bold text-xl mb-2">
                About Us
            </h3>

            <h1 className="text-white text-3xl md:text-4xl font-bold">
                What We Offer for You
            </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">

            <div className="text-center">
                <img
                    src={kofe}
                    alt=""
                    className="w-full h-[220px] object-cover rounded-[25px]"
                />
                <h2 className="text-white font-semibold mt-4">
                    Spicy
                </h2>
            </div>

            <div className="text-center">
                <img
                    src={choy}
                    alt=""
                    className="w-full h-[220px] object-cover rounded-[25px]"
                />
                <h2 className="text-white font-semibold mt-4">
                    Nuts & Feed
                </h2>
            </div>

            <div className="text-center">
                <img
                    src={anor}
                    alt=""
                    className="w-full h-[220px] object-cover rounded-[25px]"
                />
                <h2 className="text-white font-semibold mt-4">
                    Fruits
                </h2>
            </div>

            <div className="text-center">
                <img
                    src={vegatable}
                    alt=""
                    className="w-full h-[220px] object-cover rounded-[25px]"
                />
                <h2 className="text-white font-semibold mt-4">
                    Vegetable
                </h2>
            </div>

        </div>
    </div>
</section>


            </main>
        
    </div>
  )
}

export default About