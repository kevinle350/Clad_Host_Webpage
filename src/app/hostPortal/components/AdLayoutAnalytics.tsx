'use client';

import { useState } from 'react';

const initialTemplates = [
  {
    id: 'template1',
    name: 'Standard Layout',
    image: '/templates/template1.png',
    impressions: 4200,
    clicks: 320,
  },
  {
    id: 'template2',
    name: 'Engagement Boost',
    image: '/templates/template2.png',
    impressions: 5000,
    clicks: 410,
  },
  {
    id: 'template3',
    name: 'Minimal Sidebar',
    image: '/templates/template3.png',
    impressions: 3100,
    clicks: 200,
  },
];

export default function AdLayoutAnalytics() {
  const [templates, setTemplates] = useState(initialTemplates);
  const [selectedTemplate, setSelectedTemplate] = useState('template2');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Ad Layout Templates</h2>
      <p className="text-sm text-gray-500 mb-6">
        Select from saved layout templates, view performance, and compare CTR.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => {
          const ctr = template.impressions ? ((template.clicks / template.impressions) * 100).toFixed(1) : '0.0';
          const isSelected = template.id === selectedTemplate;

          return (
            <div
              key={template.id}
              className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <img
                src={template.image}
                alt={`${template.name} screenshot`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                <p className="text-sm text-gray-600">Impressions: {template.impressions}</p>
                <p className="text-sm text-gray-600">Clicks: {template.clicks}</p>
                <p className="text-sm text-gray-700 font-medium">CTR: {ctr}%</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <h3 className="text-md font-semibold mb-2">⭐ Best Performing Template</h3>
        <p className="text-sm text-gray-700">
          <strong>{templates.reduce((best, current) => (current.clicks / current.impressions > best.clicks / best.impressions ? current : best)).name}</strong>
          {' '}has the highest CTR of all saved templates.
        </p>
      </div>
    </div>
  );
}