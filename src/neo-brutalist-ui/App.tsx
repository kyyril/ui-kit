import React, { useState } from 'react';
import { Button } from './components/Button';
import { 
  ArrowRight, 
  AlertOctagon, 
  Smile, 
  MousePointer2, 
  Download,
  Terminal,
  MoveUpRight,
  Sticker,
  Hash
} from 'lucide-react';

const App = () => {
  const [loadingIds, setLoadingIds] = useState<Record<string, boolean>>({});

  const simulateLoad = (id: string) => {
    setLoadingIds(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingIds(prev => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <header className="border-3 border-black bg-neo-yellow shadow-neo-lg p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
             <Hash size={200} strokeWidth={4} />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="inline-block bg-black text-white px-3 py-1 font-bold text-sm uppercase tracking-widest transform -rotate-1">
              No Gradients allowed
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              Neo<br/>Brutalism
            </h1>
            <p className="font-sans text-xl md:text-2xl font-medium max-w-2xl border-l-4 border-black pl-4">
              Raw, bold, and unapologetic. A design system that screams for attention.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="secondary" size="lg" shadow leftIcon={<Terminal size={20} />}>
                Read Docs
              </Button>
              <Button variant="danger" size="lg" shadow rightIcon={<MoveUpRight size={20} />}>
                Get Started
              </Button>
            </div>
          </div>
        </header>

        {/* Marquee Banner */}
        <div className="border-y-3 border-black bg-neo-purple text-white py-4 overflow-hidden whitespace-nowrap">
           <div className="inline-flex animate-marquee font-display font-bold text-2xl uppercase items-center gap-8">
              <span>★ High Contrast</span>
              <span>★ Bold Typography</span>
              <span>★ Hard Shadows</span>
              <span>★ Vibrant Colors</span>
              <span>★ High Contrast</span>
              <span>★ Bold Typography</span>
              <span>★ Hard Shadows</span>
              <span>★ Vibrant Colors</span>
              <span>★ High Contrast</span>
              <span>★ Bold Typography</span>
              <span>★ Hard Shadows</span>
              <span>★ Vibrant Colors</span>
           </div>
        </div>

        {/* Component Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Palette Column */}
          <div className="lg:col-span-4 border-3 border-black bg-white shadow-neo p-6 space-y-6">
            <div className="flex items-center justify-between border-b-3 border-black pb-4">
               <h2 className="font-display text-2xl font-bold uppercase">Palette</h2>
               <Sticker size={32} />
            </div>
            
            <div className="space-y-4">
              <Button variant="primary" fullWidth className="justify-between">
                <span>Primary</span>
                <span className="font-mono text-xs">#BLUE</span>
              </Button>
              <Button variant="danger" fullWidth className="justify-between">
                <span>Danger</span>
                <span className="font-mono text-xs">#PINK</span>
              </Button>
              <Button variant="retro" fullWidth className="justify-between">
                <span>Retro</span>
                <span className="font-mono text-xs">#ORANGE</span>
              </Button>
              <Button variant="success" fullWidth className="justify-between">
                <span>Success</span>
                <span className="font-mono text-xs">#GREEN</span>
              </Button>
               <Button variant="accent" fullWidth className="justify-between">
                <span>Accent</span>
                <span className="font-mono text-xs">#PURPLE</span>
              </Button>
            </div>
          </div>

          {/* Playground Column */}
          <div className="lg:col-span-8 space-y-8">
             
             {/* Sizes Card */}
             <div className="border-3 border-black bg-neo-green/20 p-8 shadow-neo relative">
                <div className="absolute -top-4 -right-4 bg-white border-3 border-black px-4 py-1 font-bold shadow-sm transform rotate-3">
                  SIZES
                </div>
                
                <div className="flex flex-wrap items-end gap-4">
                   <Button size="xs" variant="secondary">XS</Button>
                   <Button size="sm" variant="secondary">Small</Button>
                   <Button size="md" variant="secondary">Medium</Button>
                   <Button size="lg" variant="secondary">Large</Button>
                   <Button size="xl" variant="secondary">XL</Button>
                </div>
             </div>

             {/* Interactive & Shapes */}
             <div className="grid md:grid-cols-2 gap-8">
                
                <div className="border-3 border-black bg-white p-6 shadow-neo flex flex-col items-center justify-center gap-6">
                   <h3 className="font-display text-xl font-bold uppercase underline decoration-4 decoration-neo-yellow underline-offset-4">
                     Loaders
                   </h3>
                   <Button 
                      loading={loadingIds['btn1']} 
                      onClick={() => simulateLoad('btn1')}
                      variant="primary" 
                      size="lg"
                    >
                      Click Me
                    </Button>
                    <div className="flex gap-2">
                       <Button 
                        loading={loadingIds['btn2']} 
                        onClick={() => simulateLoad('btn2')}
                        variant="secondary" 
                        rounded="full"
                        size="sm"
                       >
                         Save
                       </Button>
                       <Button 
                        loading={loadingIds['btn3']} 
                        onClick={() => simulateLoad('btn3')}
                        variant="accent" 
                        rounded="none"
                        size="sm"
                       >
                         Upload
                       </Button>
                    </div>
                </div>

                <div className="border-3 border-black bg-neo-pink p-6 shadow-neo flex flex-col items-center justify-center gap-6">
                   <h3 className="font-display text-xl font-bold uppercase text-white bg-black px-2">
                     Shapes
                   </h3>
                   <div className="flex flex-wrap justify-center gap-4">
                      <Button variant="secondary" rounded="none">Box</Button>
                      <Button variant="secondary" rounded="default">Soft</Button>
                      <Button variant="secondary" rounded="full">Round</Button>
                   </div>
                   <div className="flex gap-4">
                      <Button variant="secondary" rounded="full" className="w-12 h-12 p-0 border-3">
                        <ArrowRight />
                      </Button>
                      <Button variant="primary" rounded="none" className="w-12 h-12 p-0 border-3">
                        <Smile />
                      </Button>
                   </div>
                </div>

             </div>

          </div>
        </div>
        
        {/* Footer CTA */}
        <div className="border-3 border-black bg-white p-8 md:p-12 shadow-neo-lg text-center space-y-6 relative">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neo-yellow via-neo-pink to-neo-blue border-b-3 border-black"></div>
           
           <AlertOctagon size={48} className="mx-auto mb-4" strokeWidth={2.5} />
           <h2 className="font-display text-4xl font-bold uppercase">Ready to Break the Rules?</h2>
           <p className="font-medium text-xl max-w-xl mx-auto">
             Stop blending in. Start standing out with high-impact, brutalist components.
           </p>
           
           <div className="pt-4">
              <Button variant="primary" size="xl" rightIcon={<Download size={24} />} className="border-3">
                 Download UI Kit
              </Button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default App;