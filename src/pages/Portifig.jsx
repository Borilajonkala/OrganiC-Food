import Gggo from '../assets/Gggo.png'
import { Link, useSearchParams } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'


// Props orqali image, name, category qabul qiladi
const ProductCard = ({ id, image, name, category }) => (
  <Link
    to={`/projects/${id}`}
    className="block rounded-xl border bg-[#DEDDDD] p-4 transition hover:shadow-lg"
  >
    <img
      src={image}
      alt={name}
      referrerPolicy="no-referrer"
      onError={(e) => {
        e.currentTarget.src = 'https://placehold.co/400x300?text=No+Image'
      }}
      className="h-48 w-full object-contain"
    />
    <h2 className="mt-3 font-bold">{name}</h2>
    <p className="text-sm text-gray-600">{category}</p>
  </Link>
)

const Portifig = () => {
  const { products, loading, errors } = useFetchContext()

  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')?.trim().toLowerCase() ?? ''

  const filteredProducts = products.filter((item) =>
    (item.name ?? '').toLowerCase().includes(search)
  )


  return (
    <div>
      <img
        src={Gggo}
        alt="Organik banner"
        className="h-auto w-full object-cover"
      />

      <div className="container mx-auto mt-10 max-w-7xl px-4 py-6">
        {loading && <p>Loading...</p>}

        {errors.products && <p>{errors.products}</p>}

        {!loading && !errors.products && filteredProducts.length === 0 && (
          <p>No products found.</p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portifig