import React from 'react';
import apelsinImg from '../assets/apelsin.jpg';
import photo from '../assets/whata.png'
import qol from '../assets/qol.png'
import qol2 from '../assets/qol2.png'

const Quality = () => {
    return (
        <div>
            <div className="w-full mx-auto ">
                <div className=" h-[450px] bg-cover bg-center bg-no-repeat  flex items-center justify-center" style={{ backgroundImage: `url(${apelsinImg})` }} >
                    <h1 className="text-[#274C5B] text-7xl font-extrabold tracking-tight font-sans"> Quality Standard </h1>
                </div>
            </div>
            <section className='ml-[260px] mr-[260px] mt-[100px]'>
                <img src={photo} alt="" />
            </section>
            <section className='flex flex-col items-start justify-start  gap-[20px] ml-[400px] mr-[400px]'>
                <h1 className='text-[#274C5B] text-4xl font-extrabold tracking-tight font-sans'>  Organic Store Services  </h1>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
            </section>
            <section className='flex items-center justify-center flex-col'>
                <div className='flex items-center jutify-center gap-[30px] '>
                    <img src={qol} alt="" />
                    <div className='w-[900px] p'>
                        <h2 className='text-[#274C5B] text-2xl font-bold tracking-tight font-sans'>Why Organic</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>

                    </div>
                </div>
                <div className='flex items-center jutify-center gap-[30px] '>
                    <img src={qol2} alt="" />
                    <div className='w-[900px] p'>
                        <h2 className='text-[#274C5B] text-2xl font-bold tracking-tight font-sans'>Speciality Produce</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quality;
