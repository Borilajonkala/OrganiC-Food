
import { Link,  } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'
import Pgg from '../assets/pgg.png'


const Shop = ({search}) => {
  const { product, loading, error, refetch } = useFetchContext()

  const query = (search || '').trim().toLowerCase()

  const filteredProducts = (product || []).filter(
    item =>
      item.title?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query),
  )

  return (
    <main className="min-h-screen bg-white">

     
      <section className="relative w-full">
        <img
          src={Pgg}
          alt="Organick Shop Banner"
          className="h-auto w-full object-cover"
        />
      </section>

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
          <p
            role="status"
            className="py-16 text-center text-xl text-[#274C5B]"
          >
            Loading products...
          </p>
        )}

        {error && (
          <div
            role="alert"
            className="py-16 text-center"
          >
            <p className="mb-4 text-red-500">
              {error}
            </p>

            <button
              type="button"
              onClick={refetch}
              className="rounded-xl bg-[#274C5B] px-6 py-3 font-semibold text-white transition hover:bg-[#7EB693]"
            >
              Try Again
            </button>
          </div>
        )}


        {!loading && !error &&
          filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold text-[#274C5B]">
                No products found
              </h2>

              <p className="mt-3 text-gray-500">
                Try searching for another product.
              </p>
            </div>
          )}

    
        {!loading && !error &&
          filteredProducts.length > 0 && (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.slice(0, 12).map((item) => (

              <Link
                key={item.id}
                to={`/shop/shopsingle/${item.id}`}
                className="group relative overflow-hidden rounded-[25px] bg-[#F9F8F8] p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <h2 className="mt-3 font-bold">{item.title}</h2>
                <p>${item.price}</p>
              </Link>

            ))}

          </div>
        )}

      </section>
    </main>
  );
};

export default Shop;
