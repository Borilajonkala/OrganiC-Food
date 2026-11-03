
import React from 'react'
import Gggo from '../assets/Gggo.png'
import { useSearchParams, Link } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'

const Portifig = () => {
  const { product, loading, error, refetch } = useFetchContext()

  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')?.trim().toLowerCase() ?? ''

  const filteredProducts = (product ?? []).filter((item) =>
    item.title?.toLowerCase().includes(search)
  )

  return (
    <div>
      <img
        src={Gggo}
        alt="Organik banner"
        className="h-auto w-full object-cover"
      />

      <div className="container mx-auto mt-30 max-w-7xl px-4 py-6">

        {loading && <p>Loading products...</p>}

        {error && (
          <div>
            <p>{error}</p>
            <button onClick={refetch}>Try again</button>
          </div>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <p>No products found.</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProducts.slice(0, 9).map((item) => (
              <Link
                to={`/projects/${item.id}`}
                key={item.id}
                className="rounded-xl border bg-[#DEDDDD] p-4 block hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-contain"
                />

                <h2 className="mt-3 font-bold">
                  {item.title}
                </h2>

                <p>${item.Price}</p>
              </Link>
            ))}

          </div>
        )}
      </div>
    </div>
  )
}

export default Portifig
