import ProductCard, { Product } from "@/components/products/ProductCard";

const ProductsPage = async () => {
  const res = await fetch(
    "http://localhost:5000/products",
    //     {
    //     cache: "force-cache",
    //   },
    {
      next: {
        // revalidate: 10,
        tags: ["products"],
      },
    }
  );
  const products = await res.json();
  //   console.log(products);
  return (
    <div className="py-6">
      <h1 className="text-center text-2xl">All products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-24 px-12">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
