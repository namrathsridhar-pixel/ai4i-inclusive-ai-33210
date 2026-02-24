const RouteLoadingFallback = () => (
  <div className="min-h-screen bg-[#0a1628] pt-16">
    {/* Hero skeleton */}
    <div className="container mx-auto px-4 py-20">
      <div className="animate-pulse space-y-6">
        <div className="h-10 w-3/4 max-w-lg rounded bg-white/10" />
        <div className="h-6 w-1/2 max-w-md rounded bg-white/5" />
        <div className="h-6 w-2/3 max-w-sm rounded bg-white/5" />
        <div className="mt-8 flex gap-4">
          <div className="h-12 w-36 rounded-lg bg-white/10" />
          <div className="h-12 w-36 rounded-lg bg-white/5" />
        </div>
      </div>
    </div>
  </div>
);

export default RouteLoadingFallback;
