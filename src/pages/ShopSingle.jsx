import banner from '../assets/banner.png'
<<<<<<< HEAD
=======

>>>>>>> f9e3ce1be26ba6bf2d7d27878a222113447fc490
import broc from '../assets/broc.png'
import banan from '../assets/banan.png'
import or from '../assets/or.png'
import pomidor from '../assets/pomidor.png'
import { useParams } from 'react-router-dom'
import {  useFetchContext } from '../Context/useFetchContext'
import { useCart } from '../Context/CartContext'
import { useState } from 'react'

const ShopSingle = () => {
<<<<<<< HEAD
    const { shopProducts, loading, error } = useFetchContext()
    const { id } = useParams()

    const productID = (shopProducts ?? []).find(
=======
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)
    const { product , loading , error , } = useFetchContext()
    const { id } = useParams()


    
      const productID = product.find(
>>>>>>> f9e3ce1be26ba6bf2d7d27878a222113447fc490
        (item) => String(item.id) === id
    )

    if (loading) return <p>Loading...</p>

    if (error) return <p>Xatolik yuz berdi</p>

    if (!productID) return <p>Product topilmadi</p>


    return (
        <main>
       
            <section>
                <div>
                    <img src={banner} alt="Banner" className="w-full object-cover" />
                </div>
            </section>

      
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
                       

                 
                    <div className='relative bg-gray-50 rounded-3xl p-8 shadow-sm flex justify-center items-center'>
                        <span className='absolute top-6 left-6 bg-[#274c5b] text-white text-xs font-semibold px-3 py-1.5 rounded-lg'>
                            {productID.category}
                        </span>
                        <img src={productID.image} alt="Health Pistachios" className='w-full max-w-md object-contain' />
                    </div>

                 
                    <div className="flex flex-col gap-4 max-w-xl">
                        <h2 className="text-3xl font-bold text-[#274c5b]">{productID.name}</h2>

                        <div className="flex items-center gap-1 text-orange-400 text-sm">
                            <span>
                                {"★".repeat(
                                    Math.min(5, Math.max(0, Number(productID.rating) || 0))
                                )}
                            </span>
                        </div>

                        <div className="flex items-center gap-4 text-xl font-bold">
<<<<<<< HEAD
                            {Number(productID.oldPrice) > Number(productID.price) && (
                                <span className="text-gray-400 line-through text-lg">
                                    ${Number(productID.oldPrice).toFixed(2)}
                                </span>
                            )}
                            <span className="text-[#274c5b]">
                                ${Number(productID.price ?? 0).toFixed(2)}
                            </span>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            <span className="font-semibold text-[#274c5b]">Quantity :</span>
                            <input
                                type="number"
                                defaultValue="1"
                                min="1"
                                className="w-20 text-center border border-gray-300 rounded-xl py-2 px-3 focus:outline-none focus:border-[#274c5b]"
                            />
                            <button className="btn bg-[#274c5b] hover:bg-[#1e3a45] text-white border-none px-6 py-2 rounded-xl flex items-center gap-2 cursor-pointer">
                                Add To Cart ➔
                            </button>
                        </div>
=======
                            {productID.oldPrice && (
                                <span className="text-gray-400 line-through text-lg">${productID.oldPrice}</span>
                            )}
                            <span className="text-[#274c5b]">{productID.price}</span>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                           {productID.desc}
                        </p>

                      <div className="flex items-center gap-4 mt-4">
  <span className="font-semibold text-[#274c5b]">
    Quantity:
  </span>

  <input
    type="number"
    min="1"
    step="1"
    value={quantity}
    onChange={e => setQuantity(e.target.value)}
    className="w-20 text-center border border-gray-300 rounded-xl py-2 px-3 focus:outline-none focus:border-[#274c5b]"
  />

  <button
    type="button"
    onClick={() => addToCart(productID, quantity)}
    disabled={
      !Number.isInteger(Number(quantity)) || Number(quantity) < 1
    }
    className="btn bg-[#274c5b] hover:bg-[#1e3a45] text-white border-none px-6 py-2 rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-50"
  >
    Add To Cart ➔
  </button>
</div>
>>>>>>> f9e3ce1be26ba6bf2d7d27878a222113447fc490
                    </div>
                </div>

          
                <div className="mt-16">
                    <div className="flex items-center gap-4 mt-4 justify-center">
                        <button className="btn bg-[#274c5b] hover:bg-[#1e3a45] text-white border-none px-6 py-2 rounded-xl flex items-center justify-center w-[249px] h-[42px] cursor-pointer">
                            Product Description
                        </button>
                        <button className="btn bg-[#EFF6F1] hover:bg-[#e2ede5] text-black border-none w-62.25 h-10.5 rounded-xl cursor-pointer">
                            Additional Info
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-6 text-center max-w-3xl mx-auto">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className='flex flex-col gap-12'>
                    <div className="text-center">
                        <h2 className="text-[50px] font-extrabold text-[#274c5b]">Related Products</h2>
                    </div>

                 
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

                        
                        <div className="card bg-base-100 w-full shadow-sm border border-gray-100">
                            <figure className="bg-gray-50 p-4">
                                <img src={broc} alt="Calabrese Broccoli" className="w-full h-48 object-contain" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-[#274c5b]">Calabrese Broccoli</h2>
                                <div className="flex items-center gap-4 text-xl font-bold mt-2">
                                    <span className="text-gray-400 line-through text-lg">$20.00</span>
                                    <span className="text-[#274c5b]">$13.00</span>
                                </div>
                                <div className="flex items-center gap-1 text-orange-400 text-sm mt-1">
                                    <span>★★★★★</span>
                                </div>
                            </div>
                        </div>

                     
                        <div className="card bg-base-100 w-full shadow-sm border border-gray-100">
                            <figure className="bg-gray-50 p-4">
                                <img src={banan} alt="Calabrese Broccoli" className="w-full h-48 object-contain" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-[#274c5b]">Fresh Banana Fruites</h2>
                                <div className="flex items-center gap-4 text-xl font-bold mt-2">
                                    <span className="text-gray-400 line-through text-lg">$20.00</span>
                                    <span className="text-[#274c5b]">$14.00</span>
                                </div>
                                <div className="flex items-center gap-1 text-orange-400 text-sm mt-1">
                                    <span>★★★★★</span>
                                </div>
                            </div>
                        </div>

                     
                        <div className="card bg-base-100 w-full shadow-sm border border-gray-100">
                            <figure className="bg-gray-50 p-4">
                                <img src={or} alt="Calabrese Broccoli" className="w-full h-48 object-contain" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-[#274c5b]">White Nuts</h2>
                                <div className="flex items-center gap-4 text-xl font-bold mt-2">
                                    <span className="text-gray-400 line-through text-lg">$20.00</span>
                                    <span className="text-[#274c5b]">$15.00</span>
                                </div>
                                <div className="flex items-center gap-1 text-orange-400 text-sm mt-1">
                                    <span>★★★★★</span>
                                </div>
                            </div>
                        </div>

                       
                        <div className="card bg-base-100 w-full shadow-sm border border-gray-100">
                            <figure className="bg-gray-50 p-4">
                                <img src={pomidor} alt="Calabrese Broccoli" className="w-full h-48 object-contain" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-[#274c5b]">Vegan Red Tomato</h2>
                                <div className="flex items-center gap-4 text-xl font-bold mt-2">
                                    <span className="text-gray-400 line-through text-lg">$20.00</span>
                                    <span className="text-[#274c5b]">$17.00</span>
                                </div>
                                <div className="flex items-center gap-1 text-orange-400 text-sm mt-1">
                                    <span>★★★★★</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        
        </main>
    )
}

export default ShopSingle