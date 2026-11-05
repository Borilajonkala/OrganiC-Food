
import { useParams } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'

const ProductDetail = () => {
    const { id } = useParams()

    const { products, loading, error } = useFetchContext()

    const item = (products ?? []).find((e) => String(e.id) === id)

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    if (!item) return <h1>Product not found</h1>

    return (
        <div className="container mx-auto p-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">

                <img
                    src={item.image}
                    alt={item.name}
                    className="w-80 h-80 object-contain"
                />

                <div>
                    <h1 className="text-3xl font-bold">
                        {item.name}
                    </h1>

                    <p className="mt-2 font-semibold text-[#7EB693]">
                        {item.category}
                    </p>

                    {item.price != null && (
                        <p className="text-xl mt-4">
                            ${Number(item.price).toFixed(2)}
                        </p>
                    )}

                    {item.description && (
                        <p className="mt-4">
                            {item.description}
                        </p>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ProductDetail
