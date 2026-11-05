import ourteamImage from '../assets/Ourteam.png'
import Followimage from '../assets/Follow.png'
import { useFetchContext } from '../Context/useFetchContext'

const Ourteam = ({ search }) => {
    const { farmers, loading } = useFetchContext()

    const query = (search || '').trim().toLowerCase()

    const team = (farmers || []).filter(
        (item) =>
            item.name?.toLowerCase().includes(query) ||
            item.job?.toLowerCase().includes(query)
    )

    return (
        <main>
            <section>
                <div>
                    <img
                        src={ourteamImage}
                        alt="Banner"
                        className="w-full object-cover"
                    />
                </div>
            </section>

            <section className="flex flex-col items-center text-center px-4 py-12 max-w-7xl mx-auto">

                <div className="mb-12">
                    <span className="text-emerald-600 text-2xl md:text-3xl mb-2 block">
                        Team
                    </span>

                    <h2 className="text-slate-800 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                        Our Organic Experts
                    </h2>

                    <p className="text-slate-500 max-w-xl text-sm md:text-base leading-relaxed mx-auto">
                        Simply dummy text of the printing and typesetting industry.
                        Lorem had ceased to been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">

                    {loading && <p>Loading...</p>}

                    {!loading && team.length === 0 && (
                        <p className="text-slate-500">No team members found.</p>
                    )}

                    {!loading &&
                        team.map((item) => (
                            <div
                                key={item.id}
                                className="card bg-slate-50 w-full max-w-sm shadow-sm border border-slate-200/60 rounded-3xl overflow-hidden text-left"
                            >

                                <figure className="w-full h-80 bg-slate-200">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </figure>

                                <div className="card-body p-6">

                                    <h2 className="card-title text-xl font-bold text-slate-800">
                                        {item.name}
                                    </h2>

                                    <span className="text-emerald-600 text-xl">
                                        {item.job}
                                    </span>

                                    <div className="card-actions justify-end mt-4">
                                        <img
                                            src={Followimage}
                                            alt="Follow"
                                        />
                                    </div>

                                </div>
                            </div>
                        ))}

                </div>
            </section>
        </main>
    )
}

export default Ourteam