
import { Link } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'
import Pgg from '../assets/pgg.png'

const Shop = ({ search }) => {
  const {
    shopProducts = [],
    loading,
    error,
    refetch
  } = useFetchContext()

  const query = (search || '').trim().toLowerCase()

  const filteredProducts = shopProducts.filter((item) =>
    item.title?.toLowerCase().includes(query) ||
    item.type?.toLowerCase().includes(query)
  )

  return (
    <main className="min-h-screen bg-white">

      {/* Banner */}
      <section className="relative w-full">
        <img
          src={Pgg}
          alt="Organick Shop Banner"
          className="h-auto w-full object-cover"
        />
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <p className="mb-3 font-serif text-2xl italic text-[#7EB693]">
            Organic Products
          </p>

          <h1 className="text-4xl font-extrabold text-[#274C5B] md:text-5xl">
            Our Products
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Discover fresh, natural and organic products
            selected for a healthier lifestyle.
          </p>
        </div>

        {loading && (
          <p className="py-16 text-center text-xl text-[#274C5B]">
            Loading products...
          </p>
        )}

        {error && (
          <div className="py-16 text-center">
            <p className="mb-4 text-red-500">{error}</p>
            <button
              type="button"
              onClick={refetch}
              className="rounded-xl bg-[#274C5B] px-6 py-3 font-semibold text-white"
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
          </div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.slice(0, 12).map((item) => (
              <Link
                key={item.id}
                to={`/shop/shopsingle/${item.id}`}
                className="group relative overflow-hidden rounded-[25px] bg-[#F9F8F8] p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Category */}
                <span className="inline-block rounded-lg bg-[#274C5B] px-3 py-1 text-sm text-white">
                  {item.type}
                </span>

                {/* Product Image */}
                <div className="flex h-56 items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h2 className="mt-3 font-bold text-[#274C5B]">
                  {item.title}
                </h2>

                <div className="my-3 border-t border-gray-200" />

                {/* Prices */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 line-through">
                    ${item.prevPrice?.toFixed(2)}
                  </span>

                  <span className="text-lg font-bold text-[#274C5B]">
                    ${item.price?.toFixed(2)}
                  </span>
                </div>

              </Link>
            ))}

          </div>
        )}

      </section>
    </main>
  )
}

export default Shop
