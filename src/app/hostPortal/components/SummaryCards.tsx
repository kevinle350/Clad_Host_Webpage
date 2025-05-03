export default function SummaryCards() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">Total: $1200</div>
        <div className="bg-white p-4 rounded-lg shadow">This Month: $300</div>
        <div className="bg-white p-4 rounded-lg shadow">This Week: $75</div>
      </div>
    );
  }
  