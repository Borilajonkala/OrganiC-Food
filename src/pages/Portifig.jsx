
import Gggo from '../assets/Gggo.png'
import { Link } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'

const Portifig = ({ search }) => {
  const { product, loading, error, refetch } = useFetchContext()

  const query = (search ?? '').trim().toLowerCase()

  const filteredProducts = (product ?? []).filter(
    (item) =>
      item.title?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query)
  )

  return (
    <main className="min-h-screen bg-white">
      <section className="w-full">
        <img
          src={Gggo}
          alt="Organik banner"
          className="h-auto w-full object-cover"
        />
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-[#274C5B] md:text-5xl">
            Our Products
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Fresh and organic products straight from our farms.
          </p>
        </div>

        {loading && (
          <p role="status" className="py-16 text-center text-xl text-[#274C5B]">
            Loading products...
          </p>
        )}

        {error && (
          <div role="alert" className="py-16 text-center">
            <p className="mb-4 text-red-500">{error}</p>

            <button
              type="button"
              onClick={refetch}
              className="rounded-xl bg-[#274C5B] px-6 py-3 font-semibold text-white transition hover:bg-[#7EB693]"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-[#274C5B]">
              No products found
            </h2>

            <p className="mt-3 text-gray-500">
              Try searching for another product.
            </p>
          </div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProducts.slice(0, 9).map((item) => (
              <Link
                to={`/projects/${item.id}`}
                key={item.id}
                className="group relative block rounded-[25px] bg-[#F9F8F8] p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="absolute left-5 top-5 z-10 rounded-lg bg-[#274C5B] px-3 py-2 text-xs font-semibold text-white">
                  {item.category}
                </span>

                <div className="flex h-48 items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h2 className="mt-4 min-h-[48px] text-lg font-extrabold text-[#274C5B]">
                  {item.name}
                </h2>

                <p>${item.price}</p>
              </Link>
            ))}

          </div>
        )}
      </section>
    </main>
  )
}

export default Portifig
