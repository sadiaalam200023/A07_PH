"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

interface CategoryLinksProps {
  categories: Category[];
}

const CategoryLinks = ({ categories }: CategoryLinksProps) => {
  const pathname = usePathname();

  return (
    <nav className="w-full overflow-x-auto">
      <div className="flex min-w-max items-center justify-center gap-2 px-4 py-3 sm:gap-4">
        {categories.map((category) => {
          const isActive =
            pathname === `/category/${category.slug}`;

          return (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors sm:px-4 sm:text-base ${
                isActive
                  ? "bg-green-100 font-semibold text-green-800"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-800"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default CategoryLinks;