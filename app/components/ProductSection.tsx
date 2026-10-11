import ProductCard from "@/app/components/ProductCard";

export interface Product {
  id: number;
  slug: string;
  nameBn: string;
  categoryIcon: string;
  image: string;
  unit: string;
  today: number;
  category: string;
  change: {
    dir: "up" | "down" | string;
    pct: number;
  };
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

 
  return Array.isArray(data) ? data : data.products ?? [];
}

const ProductSections = async () => {
  const products = await getProducts();

  const risers = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallers = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div id="products" className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      
      <section>
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">
          আজ দাম বেড়েছে <span className="text-green-600">▲</span>
        </h2>
        <p className="mb-5 text-sm text-gray-500">
          যেসব পণ্যের দাম আজ সবচেয়ে বেশি বেড়েছে
        </p>

        {risers.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {risers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">দাম বৃদ্ধির কোনো তথ্য নেই।</p>
        )}
      </section>

     
      <section>
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">
          আজ দাম কমেছে <span className="text-red-600">▼</span>
        </h2>
        <p className="mb-5 text-sm text-gray-500">
          যেসব পণ্যের দাম আজ সবচেয়ে বেশি কমেছে
        </p>

        {fallers.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {fallers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">দাম কমার কোনো তথ্য নেই।</p>
        )}
      </section>

     
      <section>
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">সব পণ্য</h2>
        <p className="mb-5 text-sm text-gray-500">
          নিত্যপ্রয়োজনীয় সব পণ্যের আজকের দাম এক জায়গায় দেখুন।
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductSections;