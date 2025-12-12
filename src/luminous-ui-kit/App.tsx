import React, { useState } from 'react';
import { Button } from './components/Button';
import { 
  ArrowRight, 
  Settings, 
  Trash2, 
  Download, 
  Heart, 
  Share2, 
  MessageCircle,
  Zap,
  Layout,
  MousePointer2,
  Sparkles,
  Hexagon
} from 'lucide-react';

const App = () => {
  const [loadingIds, setLoadingIds] = useState<Record<string, boolean>>({});
  const [likes, setLikes] = useState(128);

  const simulateLoad = (id: string) => {
    setLoadingIds(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingIds(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen font-sans relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-900/30 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto p-6 md:p-12 space-y-16 z-10">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-8 py-10">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">System Online</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 mb-4">
              Luminous<span className="font-bold">UI</span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-lg">
              Next-generation interface components with holographic glassmorphism and radiant glow effects.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
             <Button 
              variant="secondary" 
              leftIcon={<Layout size={18} />}
              onClick={() => alert('Documentation coming soon!')}
            >
              Docs
            </Button>
            <Button 
              variant="primary" 
              rightIcon={<ArrowRight size={18} />}
              onClick={() => alert('Downloaded!')}
              shadow
            >
              Get Access
            </Button>
          </div>
        </header>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Palette */}
          <section className="lg:col-span-8 bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Hexagon className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-semibold text-white">Spectrum Palette</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3 items-center p-4 rounded-2xl bg-slate-800/20 border border-white/5 hover:border-white/10 transition-colors">
                <Button variant="primary">Primary</Button>
                <span className="text-xs text-cyan-400/70 font-mono tracking-widest">CYAN-500</span>
              </div>
              <div className="flex flex-col gap-3 items-center p-4 rounded-2xl bg-slate-800/20 border border-white/5 hover:border-white/10 transition-colors">
                <Button variant="accent">Accent</Button>
                <span className="text-xs text-fuchsia-400/70 font-mono tracking-widest">FUCHSIA-500</span>
              </div>
              <div className="flex flex-col gap-3 items-center p-4 rounded-2xl bg-slate-800/20 border border-white/5 hover:border-white/10 transition-colors">
                <Button variant="danger">Danger</Button>
                <span className="text-xs text-red-400/70 font-mono tracking-widest">RED-500</span>
              </div>
              <div className="flex flex-col gap-3 items-center p-4 rounded-2xl bg-slate-800/20 border border-white/5 hover:border-white/10 transition-colors">
                <Button variant="retro">Retro</Button>
                <span className="text-xs text-amber-400/70 font-mono tracking-widest">AMBER-500</span>
              </div>
              <div className="flex flex-col gap-3 items-center p-4 rounded-2xl bg-slate-800/20 border border-white/5 hover:border-white/10 transition-colors">
                <Button variant="secondary">Secondary</Button>
                <span className="text-xs text-slate-400/70 font-mono tracking-widest">SLATE-200</span>
              </div>
              <div className="flex flex-col gap-3 items-center p-4 rounded-2xl bg-slate-800/20 border border-white/5 hover:border-white/10 transition-colors">
                <Button variant="ghost">Ghost</Button>
                <span className="text-xs text-slate-500/70 font-mono tracking-widest">TRANSPARENT</span>
              </div>
            </div>
          </section>

          {/* Side Panel: States */}
          <section className="lg:col-span-4 flex flex-col gap-8">
            {/* Loading States */}
            <div className="bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-3xl p-8 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="text-fuchsia-400" size={24} />
                <h2 className="text-xl font-semibold text-white">Async States</h2>
              </div>
              <div className="space-y-4">
                <Button 
                  variant="primary" 
                  fullWidth 
                  loading={loadingIds['btn1']} 
                  onClick={() => simulateLoad('btn1')}
                >
                  Connect Server
                </Button>
                <Button 
                  variant="secondary" 
                  fullWidth 
                  loading={loadingIds['btn2']} 
                  onClick={() => simulateLoad('btn2')}
                >
                  Decrypting
                </Button>
              </div>
            </div>

            {/* Shape */}
            <div className="bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-3xl p-8 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <MousePointer2 className="text-amber-400" size={24} />
                <h2 className="text-xl font-semibold text-white">Geometry</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button rounded="none" variant="secondary" size="sm">Box</Button>
                <Button rounded="default" variant="secondary" size="sm">Soft</Button>
                <Button rounded="full" variant="secondary" size="sm">Pill</Button>
              </div>
            </div>
          </section>
        </div>

        {/* Feature Section: Sizes */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
               <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Hierarchical Scale</h2>
                  <p className="text-slate-400">Consistent padding and typography scaling across all viewports.</p>
               </div>
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
               </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pb-4">
              <Button size="xs" variant="accent">Mini</Button>
              <Button size="sm" variant="accent">Small</Button>
              <Button size="md" variant="accent">Medium</Button>
              <Button size="lg" variant="accent">Large</Button>
              <Button size="xl" variant="accent">Massive</Button>
            </div>
          </div>
        </section>

        {/* Playground / Call to Action */}
        <section className="pb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-1000" />
            <div className="relative bg-slate-950 border border-white/10 rounded-3xl p-8 md:p-16 text-center overflow-hidden">
              <Sparkles className="absolute top-10 left-10 text-white/5 rotate-12" size={120} />
              <Sparkles className="absolute bottom-10 right-10 text-white/5 -rotate-12" size={80} />
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Experience the Glow</h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
                A UI kit that doesn't just sit there. It shimmers, reacts, and engages. Perfect for Web3, SaaS, and modern digital products.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  leftIcon={<Zap size={20} />}
                  shadow
                >
                  Start Building
                </Button>
                <div className="flex items-center gap-2 bg-slate-900/50 p-2 rounded-full border border-white/5 pr-6">
                   <Button 
                    variant="danger" 
                    rounded="full"
                    size="sm"
                    onClick={() => setLikes(p => p + 1)}
                    leftIcon={<Heart size={14} fill={likes > 128 ? "currentColor" : "none"} />}
                  >
                    {likes}
                  </Button>
                  <span className="text-sm text-slate-400">People love this</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;