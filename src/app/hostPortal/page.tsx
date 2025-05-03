'use client';

import SummaryCards from './components/SummaryCards';
import RevenueChart from './components/RevenueChart';
import AdPerformance from './components/AdManagement';
import AdLayoutAnalytics from './components/AdLayoutAnalytics';
import Payouts from './components/PayoutSection';
import Link from 'next/link';

export default function HostPortal() {
  return (
    <div className="space-y-6">
      {/* Top summary section */}
      <SummaryCards />

      {/* Revenue trend and layout performance */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RevenueChart />
        <AdLayoutAnalytics />
      </div>

      {/* Ad unit management */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Manage Your Ad Units</h2>
        <AdPerformance />
        <div className="text-right mt-2">
          <Link
            href="/hostPortal/ad-settings"
            className="text-sm text-blue-600 hover:underline"
          >
            Configure Advanced Settings →
          </Link>
        </div>
      </div>

      {/* Recent payouts */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Recent Payouts</h2>
        <Payouts />
        <div className="text-right mt-2">
          <Link
            href="/hostPortal/payouts"
            className="text-sm text-blue-600 hover:underline"
          >
            View All Payouts →
          </Link>
        </div>
      </div>
    </div>
  );
}
