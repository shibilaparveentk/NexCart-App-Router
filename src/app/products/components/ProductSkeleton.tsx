
export default function ProductSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            {/* Image Skeleton */}
            <div className="h-40 animate-pulse bg-[#E9EEF0] sm:h-48" />
            {/* Product Details Skeleton */}
            <div className="space-y-3 p-4">
              <div className="h-3 w-1/3 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-1/4 animate-pulse rounded bg-gray-200" />
            </div>
            {/* Button Skeleton */}
            <div className="px-4 pb-4">
              <div className="h-10 w-full animate-pulse rounded-full bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
