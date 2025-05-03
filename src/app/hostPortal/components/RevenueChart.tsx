'use client';

import { useState } from 'react';
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const mockMonthlyData = [
  { month: 'Jan', revenue: 320 },
  { month: 'Feb', revenue: 430 },
  { month: 'Mar', revenue: 510 },
  { month: 'Apr', revenue: 610 },
  { month: 'May', revenue: 770 },
  { month: 'Jun', revenue: 830 },
  { month: 'Jul', revenue: 910 },
  { month: 'Aug', revenue: 1050 },
  { month: 'Sep', revenue: 1230 },
  { month: 'Oct', revenue: 1550 },
  { month: 'Nov', revenue: 1740 },
  { month: 'Dec', revenue: 2200 },
];

export default function RevenueChart() {
  const [showBarChart, setShowBarChart] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Monthly Revenue (Last 12 Months)</h2>
        <button
          onClick={() => setShowBarChart(!showBarChart)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Toggle to {showBarChart ? 'Line' : 'Bar'} Chart
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {showBarChart ? (
          <BarChart data={mockMonthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        ) : (
          <LineChart data={mockMonthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
