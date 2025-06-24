import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const ProductList = () => {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(res.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-gray-600 animate-pulse">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
            <p className="text-blue-600 font-bold text-lg">${product.price}</p>
            <p className="text-sm text-yellow-500 font-medium">⭐ {product.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
