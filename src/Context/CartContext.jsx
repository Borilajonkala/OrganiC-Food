import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('organic-cart'))
      return Array.isArray(saved) ? saved : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('organic-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, quantity) => {
    const amount = Number(quantity)

    if (!Number.isInteger(amount) || amount < 1) return

    setCart(prev => {
      const exists = prev.find(
        item => String(item.id) === String(product.id)
      )

      if (exists) {
        return prev.map(item =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
      }

      return [...prev, { ...product, quantity: amount }]
    })
  }

  const removeFromCart = id => {
    setCart(prev =>
      prev.filter(item => String(item.id) !== String(id))
    )
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)