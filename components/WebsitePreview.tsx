export default function WebsitePreview() {
  return (
    <div className="relative">
      {/* Desktop Preview */}
      <div className="bg-white rounded-lg shadow-2xl p-4 border border-gray-200">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="bg-gray-50 rounded">
          {/* Mock header */}
          <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="font-semibold text-sm text-gray-900">Your Business Name</div>
            <div className="text-xs text-gray-500">Menu</div>
          </div>
          {/* Mock content */}
          <div className="p-4 space-y-3">
            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            
            {/* Service Cards */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="w-6 h-6 bg-blue-500 rounded mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="bg-white rounded p-3 border border-gray-200">
                <div className="w-6 h-6 bg-blue-500 rounded mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>

            {/* Review Card */}
            <div className="bg-white rounded p-3 border border-gray-200">
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                ))}
              </div>
              <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
              <div className="h-2 bg-gray-200 rounded w-5/6"></div>
            </div>

            {/* Contact Button */}
            <div className="bg-blue-600 rounded py-2 px-4 text-center">
              <div className="h-2 bg-white rounded w-24 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Preview (overlapping) */}
      <div className="absolute -bottom-6 -right-6 w-32 bg-white rounded-lg shadow-2xl p-2 border border-gray-200">
        <div className="bg-gray-900 rounded-t h-2 mb-1"></div>
        <div className="bg-gray-50 rounded space-y-2 p-2">
          <div className="h-1.5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-1.5 bg-gray-300 rounded w-1/2"></div>
          <div className="bg-white rounded p-1.5 border border-gray-200">
            <div className="w-3 h-3 bg-blue-500 rounded mb-1"></div>
            <div className="h-1 bg-gray-200 rounded w-full"></div>
          </div>
          <div className="bg-blue-600 rounded py-1 px-2">
            <div className="h-1 bg-white rounded w-12 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
