import '../FilesCss/CsstoGameDetalis/GameDetailsSkeleton.css';

const GameDetailsSkeleton = () => {
  return (
    <div className="skeleton-container">
      {/* Header Skeleton */}
      <div className="skeleton-header">
        <div className="container mx-auto px-4 py-3">
          <div className="skeleton-text w-48 skeleton-animation"></div>
        </div>
      </div>

      {/* Title Section Skeleton */}
      <div className="skeleton-title-section">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="skeleton-text w-32 skeleton-animation"></div>
            <div className="skeleton-text w-24 skeleton-animation"></div>
          </div>
          <div className="skeleton-text w-64 mt-4 skeleton-animation"></div>
          <div className="flex gap-4 mt-4">
            <div className="skeleton-text w-32 skeleton-animation"></div>
            <div className="skeleton-text w-32 skeleton-animation"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="container mx-auto px-4 py-6">
        <div className="skeleton-grid">
          {/* Left Column */}
          <div className="skeleton-main">
            {/* Main Image Skeleton */}
            <div className="skeleton-image skeleton-animation">
              <svg className="w-full h-full text-gray-600" aria-hidden="true" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Z"/>
              </svg>
            </div>

            {/* Screenshots Grid Skeleton */}
            <div className="skeleton-screenshots-grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="skeleton-image skeleton-animation"></div>
              ))}
            </div>

            {/* About Section Skeleton */}
            <div className="skeleton-about">
              <div className="skeleton-about-title skeleton-animation"></div>
              <div className="skeleton-about-content">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="skeleton-text skeleton-animation"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="skeleton-sidebar">
            <div className="skeleton-sidebar-container">
              <div className="skeleton-sidebar-content">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="skeleton-animation">
                    <div className="skeleton-text w-24 mb-2"></div>
                    <div className="skeleton-text w-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsSkeleton;