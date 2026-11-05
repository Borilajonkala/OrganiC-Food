
import { useParams } from 'react-router-dom'
import { useFetchContext } from '../Context/useFetchContext'

const ProductDetail = () => {
    const { id } = useParams()

    const { product,  } = useFetchContext()

    const item = product?.find((e) => String(e.id) === id)

    if (!item) return <p className="container mx-auto p-10">Product topilmadi</p>

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
                        ${item.price}
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
