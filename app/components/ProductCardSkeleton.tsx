interface ProductCardSkeletonProps {
  count?: number;
}

export default function ProductCardSkeleton({
  count = 4,
}: ProductCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="h-full animate-pulse rounded-[26px] border border-[#dfe7df] bg-[#fbfdfb] p-5 sm:p-6"
        >
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 shrink-0 rounded-[20px] bg-gray-200" />

            <div className="flex-1 space-y-3">
              <div className="h-6 w-3/4 rounded bg-gray-200" />
              <div className="h-4 w-1/2 rounded bg-gray-200" />
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="h-4 w-1/3 rounded bg-gray-200" />
            <div className="h-7 w-1/2 rounded bg-gray-200" />
          </div>
        </div>
      ))}
    </>
  );
}