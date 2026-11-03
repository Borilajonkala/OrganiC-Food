
import { useParams } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'

const ProductDetail = () => {
    const { id } = useParams()

    const { product, loading, error } = useFetchContext()

    const item = product?.find((e) => String(e.id) === id)

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    if (!item) return <h1>Product not found</h1>

    return (
        <div className="container mx-auto p-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">

                <img
                    src={item.image}
                    alt={item.title}
                    className="w-80 h-80 object-contain"
                />

                <div>
                    <h1 className="text-3xl font-bold">
                        {item.title}
                    </h1>

                    <p className="text-xl mt-4">
                        ${item.Price}
                    </p>

                    <p className="mt-4">
                        {item.description}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail
