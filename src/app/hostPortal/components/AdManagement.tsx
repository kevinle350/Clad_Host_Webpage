'use client';

import { useState } from 'react';

const initialAds = [
  { id: '1', name: 'Banners', type: 'Banner', active: true },
  { id: '2', name: 'Native Ads', type: 'Native', active: false },
  { id: '3', name: 'Footer Video Ads', type: 'Video', active: true },
  { id: '4', name: 'Popup Ads', type: 'Popup', active: true },
];

export default function AdManagement() {
  const [ads, setAds] = useState(initialAds);

  const toggleAd = (id: string) => {
    setAds((prevAds) =>
      prevAds.map((ad) =>
        ad.id === id ? { ...ad, active: !ad.active } : ad
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Manage Your Ads</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Ad Name</th>
            <th className="p-2">Type</th>
            <th className="p-2">Status</th>
            <th className="p-2">Toggle</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad) => (
            <tr key={ad.id} className="border-b">
              <td className="p-2 font-medium">{ad.name}</td>
              <td className="p-2">{ad.type}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded-full text-sm font-semibold ${ad.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {ad.active ? 'Active' : 'Paused'}
                </span>
              </td>
              <td className="p-2">
                <button
                  onClick={() => toggleAd(ad.id)}
                  className={`px-4 py-1 rounded text-sm font-medium transition ${ad.active ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  {ad.active ? 'Pause' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
