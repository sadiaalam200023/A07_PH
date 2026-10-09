
import CategoryLinks from "./CategoryLinks";
interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const Categories = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: Category[] = await res.json();

  return <CategoryLinks categories={categories} />;
};

export default Categories;