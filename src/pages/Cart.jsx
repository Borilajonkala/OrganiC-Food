import { useCart } from '../Context/CartContext'

const Cart = () => {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  )

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Savat</h1>

      {cart.length === 0 ? (
        <p>Savat hozircha bo‘sh.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex flex-wrap items-center gap-6 rounded-2xl bg-gray-100 p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24 object-contain"
                />

                <div className="flex-1">
                  <h2 className="font-bold">{item.title}</h2>
                  <p>${item.price} × {item.quantity} dona</p>
                  <p className="font-bold">
                    Jami: ${(Number(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="rounded-xl bg-red-500 px-4 py-2 text-white"
                >
                  O‘chirish
                </button>
              </div>
            ))}
          </div>

          <p className="mt-6 text-2xl font-bold">
            Umumiy: ${total.toFixed(2)}
          </p>
        </>
      )}
    </main>
  )
}

export default Cart