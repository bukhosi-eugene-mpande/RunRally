import NavTrail from '@/components/navigation';
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full min-h-screen bg-gray-100">
      {/* Responsive grid with a background color */}
      <div>
        <a>Words</a>
      </div>
      <main className="col-span-1 lg:col-span-4 flex justify-center">
        <div className="w-full">{children}</div>
      </main>
      {/* Spans all columns */}
    </div>
  );
}
