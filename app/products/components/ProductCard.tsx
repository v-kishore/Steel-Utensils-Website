import React from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
    </div>
  );
};

export default ProductCard;
