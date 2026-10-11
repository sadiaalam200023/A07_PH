import Link from "next/link";
import type { Product } from "./ProductSection";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const badgeStyle = isUp
    ? "text-red-500"
    : isDown
      ? "text-green-600"
      : "text-gray-500";

  const arrow = isUp ? "▲" : isDown ? "▼" : "●";

  const unitText: Record<string, string> = {
    kg: "প্রতি কেজি",
    liter: "প্রতি লিটার",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
    pcs: "প্রতি পিস",
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block h-full rounded-[26px] border border-[#dfe7df] bg-[#fbfdfb] p-5 transition-shadow duration-200 hover:shadow-md sm:p-6"
    >
     
      <div className="flex min-w-0 items-center gap-5">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] bg-[#f0f5f0] text-4xl">
          {product.image || product.categoryIcon || "🛒"}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-3xl font-bold text-[#202b23] sm:text-2xl">
            {product.nameBn}
          </h3>
          <p className="mt-1 text-base text-[#303a32] sm:text-lg">
            {unitText[product.unit.toLowerCase()] || `প্রতি ${product.unit}`}
          </p>
        </div>
      </div>

     
      <div className="mt-5 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="text-base text-[#303a32] sm:text-lg">
            আজকের দাম
          </p>
          <p className="mt-1 text-2xl font-bold text-[#202b23] sm:text-3xl">
            {product.today.toLocaleString("bn-BD")} টাকা
          </p>
        </div>

        <div
          className={`mb-1 flex shrink-0 items-center gap-2 rounded-full bg-[#f0f5f0] px-3 py-2 text-sm font-bold sm:px-4 ${badgeStyle}`}
        >
          <span>{arrow}</span>
          <span>
            {product.change.pct.toLocaleString("bn-BD", {
              maximumFractionDigits: 1,
            })}
            %
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;