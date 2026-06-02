import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Vision from './components/Vision';
import Legacy from './components/Legacy';
import Portfolio from './components/Portfolio';
import Media from './components/Media';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-royal-ivory font-sans selection:bg-royal-gold selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Biography />
        <Vision />
        <Legacy />
        <Portfolio />
        <Media />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
