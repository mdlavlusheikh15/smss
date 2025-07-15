import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Faculty from '@/components/landing/faculty';
import Testimonials from '@/components/landing/testimonials';
import Footer from '@/components/landing/footer';
import Sidebar from '@/components/landing/sidebar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background shadow-lg rounded-b-lg">
        <Hero />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <About />
            <Faculty />
            <Testimonials />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
