import Image from "next/image";

export type Product = {
  id: string;
  product_name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
};

// type Props = {
//   products: Product[];
// };

const ProductCard = ({product}: {product: Product}) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={product.image}
        alt={product.product_name}
        className="object-cover"
        width="300"
        height="192"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.product_name}</h2>
        <p className="text-sm text-gray-500">{product.brand} - {product.category}</p>
        <p className="mt-2 text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;