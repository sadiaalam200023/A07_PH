import { notFound } from "next/navigation";
import CategoryProductList from "@/app/components/CategoryProductList";
import type { Product } from "@/app/components/ProductSection";

const API_URL = "https://api.abcz.workers.dev/api/bazardor";

interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${API_URL}/categories`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: unknown = await response.json();

  if (Array.isArray(data)) {
    return data as Category[];
  }

  if (
    typeof data === "object" &&
    data !== null &&
    "categories" in data &&
    Array.isArray(data.categories)
  ) {
    return data.categories as Category[];
  }

  return [];
}

async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: unknown = await response.json();

  if (Array.isArray(data)) {
    return data as Product[];
  }

  if (
    typeof data === "object" &&
    data !== null &&
    "products" in data &&
    Array.isArray(data.products)
  ) {
    return data.products as Product[];
  }

  return [];
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === slug
  );

  return (
    <main className="min-h-screen bg-[#f4f7f2] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{category.icon}</span>

            <h1 className="text-3xl font-bold text-[#202b23]">
              {category.nameBn}
            </h1>
          </div>

          <p className="mt-2 text-gray-600">
            {category.nameBn}-এর সব পণ্যের আজকের বাজারদর
          </p>

          <p className="mt-1 text-sm text-gray-500">
            মোট {categoryProducts.length}টি পণ্য
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <CategoryProductList products={categoryProducts} />
        ) : (
          <div className="rounded-2xl border border-[#dfe7df] bg-white px-6 py-12 text-center">
            <p className="text-4xl">🛒</p>

            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি
            </h2>

            <p className="mt-2 text-gray-500">
              পরে আবার চেষ্টা করুন।
            </p>
          </div>
        )}
      </div>
    </main>
  );
}