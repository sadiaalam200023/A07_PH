

import CategoryLinks from "@/app/components/CategoryLinks";

const API_URL = "https://api.abcz.workers.dev/api/bazardor";

const Categories = async () => {
  const res = await fetch(`${API_URL}/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories = await res.json();

  return <CategoryLinks categories={categories} />;
};

export default Categories;