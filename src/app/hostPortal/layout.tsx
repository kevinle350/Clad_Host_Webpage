import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function HostPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Sidebar />
      <div className="ml-64 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 p-6 w-full max-w-[1600px] mx-auto overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
