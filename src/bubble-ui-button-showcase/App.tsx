import React, { useState } from 'react';
import Button from './components/Button';
import { ArrowRightIcon, CheckIcon, SparklesIcon, TrashIcon, Loader2 } from './components/Icons';

const App = () => {
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [likes, setLikes] = useState(0);

  const handleLoad = (id: string) => {
    setLoading(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#4A5568] pb-20 selection:bg-clay-berry selection:text-white overflow-x-hidden">
      
      {/* Decorative Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-5%] left-[-5%] w-96 h-96 bg-clay-berry/20 rounded-full mix-blend-multiply filter blur-3xl animate-[pulse_8s_infinite]"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-clay-sky/20 rounded-full mix-blend-multiply filter blur-3xl animate-[pulse_10s_infinite]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-clay-mint/20 rounded-full mix-blend-multiply filter blur-3xl animate-[pulse_12s_infinite]"></div>
      </div>

      <div className="relative z-10">
        
        {/* Navigation */}
        <nav className="sticky top-4 z-50 px-6">
          <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg rounded-full shadow-clay-sm p-3 flex items-center justify-between">
             <div className="flex items-center gap-2 px-4">
               <div className="w-8 h-8 bg-clay-berry rounded-full flex items-center justify-center text-white font-bold text-xs shadow-inner">B</div>
               <span className="font-bold text-xl tracking-tight text-slate-700">BubbleUI</span>
             </div>
             <div className="flex gap-2">
               <Button size="sm" variant="cloud">GitHub</Button>
               <Button size="sm" variant="sky">Download</Button>
             </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
          <div className="inline-block mb-6">
            <Button size="sm" variant="lemon" floating={true} className="pointer-events-none">
              <SparklesIcon className="w-4 h-4 text-amber-700" />
              <span className="text-amber-900">v3.0 is pop!</span>
            </Button>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Soft, Squishy, <br/>
            <span className="text-clay-berry">Playful.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
            A design system based on <b>Claymorphism</b>. Inflated shapes, pastel colors, and friendly interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Button size="xl" variant="berry" rightIcon={<ArrowRightIcon className="w-6 h-6"/>}>
               Get Started
             </Button>
             <Button size="xl" variant="cloud" onClick={() => setLikes(p => p + 1)}>
               ❤️ {likes} Likes
             </Button>
          </div>
        </header>

        {/* Main Grid */}
        <main className="max-w-5xl mx-auto px-6 space-y-20">
          
          {/* Section 1: Flavor Palette */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Flavor Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="bg-white/60 p-8 rounded-3xl shadow-clay-sm flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">
                <Button variant="berry" size="lg">Berry</Button>
                <span className="text-sm font-medium text-slate-400">Sweet & Bold</span>
              </div>

              <div className="bg-white/60 p-8 rounded-3xl shadow-clay-sm flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">
                <Button variant="mint" size="lg">Mint</Button>
                <span className="text-sm font-medium text-slate-400">Fresh & Calm</span>
              </div>

              <div className="bg-white/60 p-8 rounded-3xl shadow-clay-sm flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">
                <Button variant="sky" size="lg">Sky</Button>
                <span className="text-sm font-medium text-slate-400">Airy & Trust</span>
              </div>

              <div className="bg-white/60 p-8 rounded-3xl shadow-clay-sm flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">
                <Button variant="lemon" size="lg">Lemon</Button>
                <span className="text-sm font-medium text-slate-400">Zesty & Fun</span>
              </div>
            </div>
          </section>

          {/* Section 2: Interactions */}
          <section className="bg-white/40 rounded-[3rem] p-12 border border-white/50 shadow-clay-inner">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Elastic Physics</h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">Loading State</h3>
                  <p className="text-slate-500 mb-4">Buttons maintain their volume while processing.</p>
                  <Button 
                    fullWidth 
                    variant="sky" 
                    loading={loading['l1']} 
                    onClick={() => handleLoad('l1')}
                  >
                    Process Payment
                  </Button>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">Disabled State</h3>
                  <p className="text-slate-500 mb-4">Volume decreases, opacity drops.</p>
                  <Button fullWidth variant="berry" disabled>
                    Cannot Click
                  </Button>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                   <h3 className="text-xl font-bold text-slate-700 mb-2">Neutral Actions</h3>
                   <p className="text-slate-500 mb-4">Perfect for secondary options.</p>
                   <div className="flex gap-4">
                     <Button variant="cloud">Cancel</Button>
                     <Button variant="night">Dark Mode</Button>
                   </div>
                </div>

                <div>
                   <h3 className="text-xl font-bold text-slate-700 mb-2">Sizing</h3>
                   <div className="flex flex-wrap items-end gap-3">
                     <Button size="sm" variant="mint">Sm</Button>
                     <Button size="md" variant="mint">Medium</Button>
                     <Button size="lg" variant="mint">Large</Button>
                   </div>
                </div>
              </div>

            </div>
          </section>

          {/* Section 3: Call to Action */}
          <section className="text-center py-10">
            <div className="bg-clay-berry rounded-[3rem] p-12 shadow-clay-md text-white relative overflow-hidden">
               {/* Shine effect overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
               
               <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to make it pop?</h2>
               <p className="text-berry-100 mb-8 max-w-lg mx-auto relative z-10 opacity-90">
                 The Bubble UI kit is designed for apps that want to feel friendly, approachable, and fun.
               </p>
               <Button size="xl" variant="lemon" className="text-amber-900 font-extrabold shadow-lg">
                 Download Kit
               </Button>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default App;