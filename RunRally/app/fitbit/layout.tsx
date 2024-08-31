export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full min-h-screen p-4">
      {' '}
      {/* Responsive grid */}
      <main className="col-span-1 lg:col-span-4">{children}</main>{' '}
      {/* Spans all columns */}
    </div>
  );
}
