

interface Product {
  id: number;
  slug: string;
  nameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

const PriceTicker = async () => {
  const products = await getProducts();

  return (
    <div className="w-full overflow-hidden border-y border-gray-200 bg-gray-50 py-3">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...products, ...products].map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="flex shrink-0 items-center gap-2 px-5 text-sm"
          >
            <span>{product.categoryIcon}</span>

            <span className="font-medium">{product.nameBn}</span>

            <span className="text-gray-700">
              {product.today} টাকা/
              {product.unit === "kg" ? "কেজি" : product.unit}
            </span>

            <span
              className={
                product.change.dir === "up"
                  ? "font-semibold text-red-600"
                  : "font-semibold text-green-600"
              }
            >
              {product.change.dir === "up" ? "▲" : "▼"}
              {product.change.pct}%
            </span>

            <span className="ml-3 text-gray-300">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTicker;
