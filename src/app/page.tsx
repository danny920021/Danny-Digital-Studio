import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Cta from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      {/* Hero - 白色背景 */}
      <Hero />
      
      {/* 分隔區域 - 增大間距 */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* About - 淺灰背景 */}
      <div className="bg-gray-50">
        <About />
      </div>
      
      {/* Services - 白色背景 */}
      <div className="bg-white">
        <Services />
      </div>
      
      {/* Portfolio - 淺灰背景 */}
      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Portfolio />
        </div>
      </div>
      
      {/* CTA - 白色背景 */}
      <div className="bg-white">
        <Cta />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
