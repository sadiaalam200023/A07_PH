import ProductCardSkeleton from "@/app/components/ProductCardSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f4f7f2] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 animate-pulse space-y-3">
          <div className="h-9 w-48 rounded bg-gray-200" />
          <div className="h-4 w-64 rounded bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductCardSkeleton count={8} />
        </div>
      </div>
    </main>
  );
}