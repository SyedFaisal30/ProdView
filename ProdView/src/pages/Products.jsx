import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const ProductList = ({ searchQuery, sortOption }) => {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoadingMap, setImageLoadingMap] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/products`, {
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

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating-asc":
        return a.rating - b.rating;
      case "rating-desc":
        return b.rating - a.rating;
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  const handleImageLoad = (id) => {
    setImageLoadingMap((prev) => ({ ...prev, [id]: false }));
  };

  const handleImageError = (id) => {
    setImageLoadingMap((prev) => ({ ...prev, [id]: false }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="space-x-2 flex">
          <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:0.1s]"></span>
          <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {sorted.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 w-full"
        >
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-t-2xl overflow-hidden relative">
            {imageLoadingMap[product.id] !== false && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
              </div>
            )}
            <img
              src={product.thumbnail}
              alt={product.title}
              onLoad={() => handleImageLoad(product.id)}
              onError={() => handleImageError(product.id)}
              className={`w-full h-48 object-cover transition-opacity duration-300 ${
                imageLoadingMap[product.id] === false ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {product.title}
            </h3>
            <p className="text-blue-600 font-bold text-lg">${product.price}</p>
            <p className="text-sm text-yellow-500 font-medium">
              ⭐ {product.rating}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
