import React, { useState } from 'react';
import Button from './components/Button';
import { ArrowRightIcon, CheckIcon, SparklesIcon, TrashIcon, Loader2 } from './components/Icons';

const App = () => {
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const handleLoad = (id: string) => {
    setLoading(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, [id]: false }));
    }, 1500); // Faster load for faster UI
  };

  return (
    <div className="min-h-screen text-ink-900 pb-20 bg-[#F6F8FA]">
      
      {/* Navbar */}
      <nav className="border-b-2 border-ink-100 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold text-2xl tracking-tighter flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
            Kinetik.
          </div>
          <div className="flex gap-4">
            <Button size="sm" variant="ghost">Guide</Button>
            <Button size="sm" variant="secondary">Components</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-md text-sm uppercase tracking-wide">
            Design System 2.0
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-ink-950 mb-8 leading-[0.95]">
            Tangible <br/> Interfaces.
          </h1>
          <p className="text-xl text-ink-500 mb-10 max-w-xl font-medium leading-relaxed">
            A "Neo-Tactile" design language. We stripped away the glow and brought back the <b>click</b>. Clean, geometric, and physically satisfying.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="primary">Get Started</Button>
            <Button size="lg" variant="secondary" leftIcon={<span className="font-mono text-lg font-bold">#</span>}>
              Documentation
            </Button>
          </div>
        </div>
      </header>

      {/* Main Showcase Grid */}
      <main className="max-w-5xl mx-auto px-6 space-y-24">
        
        {/* Section 1: The Palette */}
        <section>
          <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-ink-900 text-white flex items-center justify-center text-sm">1</span>
            Variant Set
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-xl border-2 border-ink-100 flex flex-col items-start gap-6 shadow-sm">
              <h3 className="font-bold text-ink-400 uppercase text-sm tracking-wider">Solid Actions</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="neutral">Neutral</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <p className="text-sm text-ink-400 mt-2">
                Use for high-priority actions. The heavy shadow implies "Press Me".
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl border-2 border-ink-100 flex flex-col items-start gap-6 shadow-sm">
              <h3 className="font-bold text-ink-400 uppercase text-sm tracking-wider">Surface Actions</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <p className="text-sm text-ink-400 mt-2">
                Secondary retains depth for consistency. Outline is dashed for "Empty" states.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Physics (Sizes) */}
        <section>
          <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
             <span className="w-8 h-8 rounded-full bg-ink-900 text-white flex items-center justify-center text-sm">2</span>
             Physics & Scale
          </h2>
          <div className="bg-white rounded-xl border-2 border-ink-100 p-12 flex flex-col items-center justify-center gap-12">
            
            <div className="flex flex-wrap items-end gap-6 pb-8 border-b-2 border-dashed border-ink-100 w-full justify-center">
              <div className="flex flex-col items-center gap-2">
                 <Button size="sm" variant="primary">Small</Button>
                 <span className="text-xs font-mono text-ink-400">2px Depth</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <Button size="md" variant="primary">Medium</Button>
                 <span className="text-xs font-mono text-ink-400">4px Depth</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <Button size="lg" variant="primary">Large</Button>
                 <span className="text-xs font-mono text-ink-400">6px Depth</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <Button size="xl" variant="primary">Extra Large</Button>
                 <span className="text-xs font-mono text-ink-400">6px Depth</span>
              </div>
            </div>

            <div className="text-center max-w-lg">
               <h3 className="font-bold text-lg mb-2">Tactile Feedback</h3>
               <p className="text-ink-500">
                 Notice how the button physically depresses? The shadow (depth) disappears and the button face translates down on the Y-axis. This simulates a real mechanical switch.
               </p>
            </div>

          </div>
        </section>

        {/* Section 3: Applications */}
        <section>
           <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
             <span className="w-8 h-8 rounded-full bg-ink-900 text-white flex items-center justify-center text-sm">3</span>
             Contextual Usage
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Form */}
            <div className="bg-white border-2 border-ink-100 rounded-xl p-6 flex flex-col gap-4">
              <div className="h-4 bg-ink-100 rounded w-1/3 mb-2"></div>
              <div className="h-10 border-2 border-ink-100 rounded-lg bg-ink-50"></div>
              <div className="h-4 bg-ink-100 rounded w-1/4 mt-2 mb-2"></div>
              <div className="h-10 border-2 border-ink-100 rounded-lg bg-ink-50"></div>
              <div className="mt-4">
                <Button fullWidth variant="primary" 
                   loading={loading['form']} 
                   onClick={() => handleLoad('form')}>
                   Submit Request
                </Button>
              </div>
            </div>

            {/* Card 2: Marketing */}
            <div className="bg-ink-900 text-white border-2 border-ink-900 rounded-xl p-6 flex flex-col gap-4 justify-between">
              <div>
                <h4 className="font-bold text-xl mb-2">Pro Plan</h4>
                <p className="text-ink-400 text-sm">Unlock everything.</p>
              </div>
              <Button fullWidth variant="accent" size="lg" rightIcon={<SparklesIcon className="w-4 h-4"/>}>
                Upgrade Now
              </Button>
            </div>

            {/* Card 3: Alert */}
            <div className="bg-red-50 border-2 border-red-100 rounded-xl p-6 flex flex-col gap-4 justify-center items-center text-center">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-2">
                <TrashIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-red-900">Delete Project?</h4>
                <p className="text-red-600/70 text-sm">This action cannot be undone.</p>
              </div>
              <div className="flex gap-3 w-full mt-2">
                <Button fullWidth variant="ghost" className="bg-white border-2 border-red-100 hover:border-red-200">Cancel</Button>
                <Button fullWidth variant="destructive">Confirm</Button>
              </div>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
};

export default App;