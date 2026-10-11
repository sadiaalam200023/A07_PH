
import { notFound} from "next/navigation";


interface Market {
  market: string;
  division?: string;
  min: number;
  max: number;
}

interface ProductDetail {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  image: string;
  unit: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
  markets?: Market[];
}

const unitLabels: Record<string, string> = {
  kg: "প্রতি কেজি",
  liter: "প্রতি লিটার",
  litre: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
  pcs: "প্রতি পিস",
};

const formatPrice = (price: number) =>
  `${Math.round(price).toLocaleString("bn-BD")} টাকা`;

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (!session) {
//     redirect("/signin");
//   }

  
  const { slug } = await params;

  
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const data = await res.json();

  const products: ProductDetail[] = Array.isArray(data)
    ? data
    : data.products ?? [];

 
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const markets = product.markets ?? [];

  const minPrice =
    markets.length > 0
      ? Math.min(...markets.map((market) => market.min))
      : product.today;

  const maxPrice =
    markets.length > 0
      ? Math.max(...markets.map((market) => market.max))
      : product.today;

 
  const averagePrice =
    markets.length > 0
      ? markets.reduce(
          (total, market) => total + (market.min + market.max) / 2,
          0
        ) / markets.length
      : product.today;

  const unit =
    unitLabels[product.unit.toLowerCase()] ?? `প্রতি ${product.unit}`;

  return (
    <main className="min-h-screen bg-[#f4f7f2] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">

       
        <section className="rounded-3xl border border-[#dfe7df] bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-5xl">
              {product.image || product.categoryIcon || "🛒"}
            </div>

            <div>
              <p className="text-sm font-medium text-green-700">
                {product.categoryIcon} {product.categoryNameBn}
              </p>

              <h1 className="mt-1 text-3xl font-bold text-[#202b23]">
                {product.nameBn}
              </h1>

              <p className="mt-2 text-gray-600">
                {markets.length > 0
                  ? `বিভিন্ন বাজারে ${product.nameBn}-এর আজকের দামের তুলনা`
                  : `${product.nameBn}-এর আজকের বাজারদর`}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#e7f2e5] px-3 py-1 text-sm text-green-800">
                  {product.categoryNameBn}
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                  {unit}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-gray-100 pt-5">
            <p className="text-gray-500">আজকের দাম</p>
            <p className="mt-1 text-3xl font-extrabold text-[#202b23]">
              {formatPrice(product.today)}
            </p>

            <p
              className={`mt-2 text-sm font-semibold ${
                product.change.dir === "up"
                  ? "text-red-500"
                  : product.change.dir === "down"
                    ? "text-green-600"
                    : "text-gray-500"
              }`}
            >
              {product.change.dir === "up"
                ? "▲ দাম বেড়েছে"
                : product.change.dir === "down"
                  ? "▼ দাম কমেছে"
                  : "● দাম অপরিবর্তিত"}{" "}
              {product.change.pct.toLocaleString("bn-BD", {
                maximumFractionDigits: 1,
              })}
              %
            </p>
          </div>
        </section>

       
        <section>
          <h2 className="mb-4 text-2xl font-bold text-[#202b23]">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#dfe7df] bg-white p-5">
              <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-2 text-2xl font-bold text-green-700">
                {formatPrice(minPrice)}
              </p>
            </div>

            <div className="rounded-2xl border border-[#dfe7df] bg-white p-5">
              <p className="text-sm text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-2 text-2xl font-bold text-red-600">
                {formatPrice(maxPrice)}
              </p>
            </div>

            <div className="rounded-2xl border border-[#dfe7df] bg-white p-5">
              <p className="text-sm text-gray-500">গড় দাম</p>
              <p className="mt-2 text-2xl font-bold text-[#202b23]">
                {formatPrice(averagePrice)}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            গড় দামটি প্রতিটি বাজারের সর্বনিম্ন ও সর্বোচ্চ দামের মধ্যবিন্দু
            থেকে হিসাব করা হয়েছে।
          </p>
        </section>

      
        <section>
          <h2 className="mb-4 text-2xl font-bold text-[#202b23]">
            আগের দিনের দামের তুলনা
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#dfe7df] bg-white p-5">
              <p className="text-sm text-gray-500">গতকালের দাম</p>
              <p className="mt-2 text-xl font-bold text-[#202b23]">
                {formatPrice(product.yesterday)}
              </p>
            </div>

            <div className="rounded-2xl border border-[#dfe7df] bg-white p-5">
              <p className="text-sm text-gray-500">গত সপ্তাহের দাম</p>
              <p className="mt-2 text-xl font-bold text-[#202b23]">
                {formatPrice(product.lastWeek)}
              </p>
            </div>

            <div className="rounded-2xl border border-[#dfe7df] bg-white p-5">
              <p className="text-sm text-gray-500">গত মাসের দাম</p>
              <p className="mt-2 text-xl font-bold text-[#202b23]">
                {formatPrice(product.lastMonth)}
              </p>
            </div>
          </div>
        </section>

      
        <section>
          <h2 className="mb-4 text-2xl font-bold text-[#202b23]">
            বাজারভিত্তিক আজকের দাম
          </h2>

          {markets.length === 0 ? (
            <div className="rounded-2xl border border-[#dfe7df] bg-white p-6 text-gray-600">
              এই পণ্যের বাজারভিত্তিক দামের তথ্য পাওয়া যায়নি।
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-[#dfe7df] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[540px] text-left">
                  <thead className="bg-[#edf3ec] text-sm text-[#354438]">
                    <tr>
                      <th className="px-5 py-4">বাজারের নাম</th>
                      <th className="px-5 py-4">সর্বনিম্ন দাম</th>
                      <th className="px-5 py-4">সর্বোচ্চ দাম</th>
                      <th className="px-5 py-4">বিভাগ</th>
                    </tr>
                  </thead>

                  <tbody>
                    {markets.map((market, index) => (
                      <tr
                        key={`${market.market}-${index}`}
                        className="border-t border-gray-100 transition-colors hover:bg-[#f8faf7]"
                      >
                        <td className="px-5 py-4 font-semibold text-[#202b23]">
                          🏪 {market.market}
                        </td>

                        <td className="px-5 py-4 font-medium text-green-700">
                          {formatPrice(market.min)}
                        </td>

                        <td className="px-5 py-4 font-medium text-red-600">
                          {formatPrice(market.max)}
                        </td>

                        <td className="px-5 py-4 text-gray-600">
                          {market.division || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}