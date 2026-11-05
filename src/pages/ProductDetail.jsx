import { Link, useParams } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'

const ProductDetail = () => {
  const { id } = useParams()

    const { product,  } = useFetchContext()

    const item = (products ?? []).find((e) => String(e.id) === id)

    if (!item) return <p className="container mx-auto p-10">Product topilmadi</p>

  if (errors.products)
    return <p className="container mx-auto py-10">{errors.products}</p>

  if (!item) return <p className="container mx-auto py-10">Product topilmadi</p>

  return (
    <div className="container mx-auto w-[85%] py-10">
      <Link to="/projects" className="text-sm text-gray-600 hover:underline">
        ← Orqaga
      </Link>

      <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-80 w-80 rounded-xl bg-white object-contain p-4 shadow"
        />

        <div>
          <h1 className="text-3xl font-bold">{item.name}</h1>

          <p className="mt-4 text-gray-600">{item.category}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
