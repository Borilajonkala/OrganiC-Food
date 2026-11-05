import lic from '../assets/lic.png'

const Licensens = () => {
    return (
        <main>
            <section>

                <div>
                    <img src={lic} alt="Banner" className="w-full object-cover" />
                </div>
            </section>
            <section className="w-full max-w-[1255px] mx-auto px-6 py-12 ">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">


                    <div className="md:col-span-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#274C5B] tracking-tight">
                            Icon & Graphics
                        </h2>
                    </div>

                    <div className="md:col-span-8 space-y-4 text-gray-600 text-base leading-relaxed">
                        <p>
                            Icons and Graphics are manually designed by the{' '}
                            <span className="text-[#7EB693] font-medium">VictorFlow</span>{' '}
                            Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.
                        </p>
                        <p>
                            Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.
                        </p>
                    </div>


                    <div className="md:col-span-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#274C5B] tracking-tight">
                            Photography
                        </h2>
                    </div>
                    <div className="md:col-span-8 space-y-4 text-gray-600 text-base leading-relaxed">
                        <p>
                            All images used in the Organick Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels‍. And Freepik.
                        </p>
                        <div>
                            <h1 className='text-[20px] font-bold text-[#274C5B] tracking-tight'>Unsplash</h1>
                            <p>Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,</p>
                        </div>
                        <div>
                            <h1 className='text-[20px] font-bold text-[#274C5B] tracking-tight'>Pixcel</h1>
                            <p>Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,</p>
                        </div>
                    </div>
                    <div className="md:col-span-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#274C5B] tracking-tight">
                           Font
                        </h2>
                    </div>
                     <div className="md:col-span-8 space-y-4 text-gray-600 text-base leading-relaxed">
                        <p>
                            Organick template uses free licensed Google Fonts. Please check{' '}
                            <span className="text-[#black] font-medium">Roboto, Yellowtail</span>{' '}
                             and{' '}
                            <span className="text-[#black] font-medium">Open Sans.</span>{' '}
                        </p>
                        
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Licensens