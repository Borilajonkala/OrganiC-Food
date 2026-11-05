import ourteamImage from '../assets/Ourteam.png'
import farmerImage from '../assets/farmer.jpg'
import Followimage from '../assets/Follow.png'
import designerImage from '../assets/Mary.jpg'
import RigaImage from '../assets/Riga.jpg'
import KeiraImage from '../assets/Kira.jpg'
import scottImage from '../assets/scott.jpg'
import KarenImage from '../assets/Karen.jpg'

const Ourteam = () => {
    return (
        <main>
            <section>
                <div>
                    <img src={ourteamImage} alt="Banner" className="w-full object-cover" />
                </div>
            </section>

            <section className="flex flex-col items-center text-center px-4 py-12 max-w-7xl mx-auto">
                <div className="mb-12">
                    <span className="text-emerald-600 text-2xl md:text-3xl  mb-2 block">
                        Team
                    </span>
                    <h2 className="text-slate-800 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                        Our Organic Experts
                    </h2>
                    <p className="text-slate-500 max-w-xl text-sm md:text-base leading-relaxed mx-auto">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                </div>

            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
                    

                    <div className="card bg-slate-50 w-full max-w-sm shadow-sm border border-slate-200/60 rounded-3xl overflow-hidden text-left">
                        <figure className="w-full h-80 bg-slate-200">
                            <img src={farmerImage} alt="Giovani Bacardo" className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-xl font-bold text-slate-800">Giovani Bacardo</h2>
                            <span className="text-emerald-600 text-xl ">Farmer</span>
                            <div className="card-actions justify-end mt-4">
                                <img src={Followimage} alt="Follow" />
                            </div>
                        </div>
                    </div>


                    <div className="card bg-slate-50 w-full max-w-sm shadow-sm border border-slate-200/60 rounded-3xl overflow-hidden text-left">
                        <figure className="w-full h-80 bg-slate-200">
                            <img src={designerImage} alt="Marianne Loreno" className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-xl font-bold text-slate-800">Marianne Loreno</h2>
                            <span className="text-emerald-600 text-xl ">Designer</span>
                            <div className="card-actions justify-end mt-4">
                                <img src={Followimage} alt="Follow" />
                            </div>
                        </div>
                    </div>

         
                    <div className="card bg-slate-50 w-full max-w-sm shadow-sm border border-slate-200/60 rounded-3xl overflow-hidden text-left">
                        <figure className="w-full h-80 bg-slate-200">
                            <img src={RigaImage} alt="Riga Pelore" className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-xl font-bold text-slate-800">Riga Pelore</h2>
                            <span className="text-emerald-600 text-xl ">Farmer</span>
                            <div className="card-actions justify-end mt-4">
                                <img src={Followimage} alt="Follow" />
                            </div>
                        </div>
                    </div>


                    <div className="card bg-slate-50 w-full max-w-sm shadow-sm border border-slate-200/60 rounded-3xl overflow-hidden text-left">
                        <figure className="w-full h-80 bg-slate-200">
                            <img src={KeiraImage} alt="Keira Knightley" className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-xl font-bold text-slate-800">Keira Knightley</h2>
                            <span className="text-emerald-600 text-xl ">Farmer</span>
                            <div className="card-actions justify-end mt-4">
                                <img src={Followimage} alt="Follow" />
                            </div>
                        </div>
                    </div>

                
                    <div className="card bg-slate-50 w-full max-w-sm shadow-sm border border-slate-200/60 rounded-3xl overflow-hidden text-left">
                        <figure className="w-full h-80 bg-slate-200">
                            <img src={scottImage} alt="Scott Lawrence" className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-xl font-bold text-slate-800">Scott Lawrence</h2>
                            <span className="text-emerald-600 text-xl ">Designer</span>
                            <div className="card-actions justify-end mt-4">
                                <img src={Followimage} alt="Follow" />
                            </div>
                        </div>
                    </div>

          
                    <div className="card bg-slate-50 w-full max-w-sm shadow-sm border border-slate-200/60 rounded-3xl overflow-hidden text-left">
                        <figure className="w-full h-80 bg-slate-200">
                            <img src={KarenImage} alt="Karen Allen" className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-xl font-bold text-slate-800">Karen Allen</h2>
                            <span className="text-emerald-600 text-xl ">Farmer</span>
                            <div className="card-actions justify-end mt-4">
                                <img src={Followimage} alt="Follow" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Ourteam