import { Navbar } from '@/components/navbar';

export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
            <Navbar />
            <div className='bg-white h-full'>
              {children}
            </div>
        </div>
    );
  }
  