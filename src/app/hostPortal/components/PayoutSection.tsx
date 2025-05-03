'use client';

import { useState } from 'react';

const mockPayouts = [
  { id: 'p1', date: '2024-01-31', amount: 250.0, status: 'Completed' },
  { id: 'p2', date: '2024-02-29', amount: 300.0, status: 'Completed' },
  { id: 'p3', date: '2024-03-31', amount: 280.0, status: 'Pending' },
];

export default function Payouts() {
  const [payouts] = useState(mockPayouts);
  const linkedAccount = true; // change to false to test "Link Account" UI

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Payouts</h2>

      {!linkedAccount ? (
        <div className="text-center py-10">
          <p className="text-gray-600 mb-4">You haven't linked a payout method yet.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Link Payment Method
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-sm text-gray-500">Your payouts will be processed monthly once your balance exceeds $100.</p>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">Date</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((payout) => (
                <tr key={payout.id} className="border-b">
                  <td className="p-2">{payout.date}</td>
                  <td className="p-2">${payout.amount.toFixed(2)}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      payout.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {payout.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}