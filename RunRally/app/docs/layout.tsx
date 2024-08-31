export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <main className="col-span-3">{children}</main>
    </div>
  );
}
