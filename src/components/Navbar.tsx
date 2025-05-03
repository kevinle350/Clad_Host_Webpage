'use client';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold text-blue-600"></div>
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
          Support
        </button>
        <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
          Settings
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
          C
        </div>
      </div>
    </nav>
  );
}
