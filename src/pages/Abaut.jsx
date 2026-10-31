import React from 'react'
import Baner from '../assets/baner.png'
import Image from '../assets/image.png'
const Abaut = () => {
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
            </main>
        
    </div>
  )
}

export default Abaut