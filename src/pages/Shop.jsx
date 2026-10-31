
import { useFetchContext } from "../Context/useFetchContext";
import Pgg from '../assets/pgg.png'

const Shop = () => {
  const { product, loading, error, refetch } = useFetchContext();

  return (

    <div>
		 <img
                  src={Pgg}
                  alt="Organick banner"
                  className="h-auto w-full object-cover"
                />
      <div className=" container mx-auto max-w-7xl px-4 py-6 mt-30 w-[1200px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.slice(0, 12).map((item) => (
            <div key={item.id} className="rounded-xl border p-4 bg-[#DEDDDD]">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-contain"
              />

              <h2 className="mt-3 font-bold">{item.title}</h2>
              <p>${item.Price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
