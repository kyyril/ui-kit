import React, { useState } from 'react';
import Button from './components/Button';
import { ArrowRightIcon, CheckIcon, SparklesIcon, TrashIcon, Loader2 } from './components/Icons';

const App = () => {
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState([1, 2]);

  const handleLoad = (id: string) => {
    setLoading(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center overflow-x-hidden">
      
      {/* Notebook Container */}
      <div className="w-full max-w-5xl bg-sketch-paper min-h-[800px] shadow-sketch-lg relative border-2 border-black rounded-lg md:rounded-r-lg md:rounded-l-none transform rotate-1">
        
        {/* Spiral Binding Visual */}
        <div className="hidden md:flex flex-col gap-4 absolute -left-6 top-10 bottom-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-12 h-8 bg-gray-300 rounded-full border-2 border-black relative z-10 shadow-sm">
               <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full opacity-20"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 md:pl-16">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-black pb-4 border-dashed gap-4">
            <div>
              <div className="inline-block bg-sketch-highlight px-2 py-1 transform -rotate-2 mb-2">
                <span className="text-sm font-bold uppercase tracking-widest text-black">Project: UI_V4</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-sketch-graphite">My Sketchbook</h1>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="doodle">Share</Button>
              <Button size="sm" variant="ink">Save</Button>
            </div>
          </div>

          {/* Doodles Grid */}
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Sidebar / Tools */}
            <div className="md:col-span-4 space-y-8">
              
              <div className="bg-white border-2 border-black p-6 shadow-sketch transform -rotate-1 rounded-[255px_15px_225px_15px/15px_225px_15px_255px]">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-3xl">✏️</span> Tools
                </h3>
                <div className="flex flex-col gap-3">
                  <Button fullWidth variant="ink" leftIcon={<span>🖊️</span>}>Blue Pen</Button>
                  <Button fullWidth variant="graphite" leftIcon={<span>✏️</span>}>Pencil</Button>
                  <Button fullWidth variant="marker" leftIcon={<span>🖍️</span>}>Marker</Button>
                  <Button fullWidth variant="doodle" leftIcon={<span>📏</span>}>Sketch</Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-sketch-highlight rounded-full opacity-50 z-0"></div>
                <div className="relative z-10 p-4 border-l-4 border-sketch-marker pl-4">
                  <p className="text-xl italic text-gray-600">"Imperfection is the digital feature, not a bug."</p>
                  <p className="text-right font-bold mt-2">- The Designer</p>
                </div>
              </div>

            </div>

            {/* Main Canvas Area */}
            <div className="md:col-span-8 space-y-12">
              
              {/* Sticker Collection */}
              <section>
                <h2 className="text-3xl font-bold mb-6 underline decoration-sketch-ink decoration-wavy decoration-2">Sticker Sheet</h2>
                <div className="flex flex-wrap gap-6 p-8 border-2 border-black border-dashed rounded-xl bg-white/50 relative">
                   {/* Tape visual */}
                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-100/90 shadow-sm rotate-2"></div>
                   
                   <Button variant="tape">Washi Tape</Button>
                   <Button variant="paper" size="lg" className="rotate-2">
                     <SparklesIcon className="w-5 h-5 text-yellow-500" /> Great!
                   </Button>
                   <Button variant="ink" size="lg" className="-rotate-2" loading={loading['s1']} onClick={() => handleLoad('s1')}>
                     Submit
                   </Button>
                   <Button variant="marker" size="sm" rounded={true} className="rotate-6">
                     NEW!
                   </Button>
                   <Button variant="paper" leftIcon={<TrashIcon className="w-4 h-4"/>}>Trash</Button>
                </div>
              </section>

              {/* Action List */}
              <section>
                 <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                   To-Do List 
                   <span className="text-sm bg-black text-white px-2 rounded-full font-sans">3</span>
                 </h2>
                 <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <Button variant="doodle" size="sm" className="w-8 h-8 p-0">✓</Button>
                      <span className="text-xl line-through text-gray-400">Draft initial concepts</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="ink" size="sm" className="w-8 h-8 p-0">✓</Button>
                      <span className="text-xl">Finalize color palette</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="doodle" size="sm" className="w-8 h-8 p-0 border-sketch-marker text-sketch-marker">?</Button>
                      <span className="text-xl">Push to production</span>
                      <Button variant="tape" size="sm" className="ml-auto text-sm">Urgent</Button>
                    </div>
                 </div>
              </section>

              {/* Sizes Doodle */}
              <section className="relative">
                {/* Hand drawn arrow SVG */}
                <svg className="absolute -right-10 -top-10 w-24 h-24 transform rotate-12 text-gray-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M10,50 Q50,10 90,50" strokeDasharray="5,5" />
                   <path d="M80,40 L90,50 L80,60" />
                </svg>

                <div className="flex items-end gap-4 p-4">
                   <Button variant="graphite" size="sm">S</Button>
                   <Button variant="graphite" size="md">M</Button>
                   <Button variant="graphite" size="lg">L</Button>
                   <Button variant="graphite" size="xl">XL</Button>
                </div>
              </section>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;