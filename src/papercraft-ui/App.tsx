import React, { useState } from 'react';
import { Button } from './components/Button';
import { 
  PenTool, 
  Scissors, 
  Sticker, 
  Image as ImageIcon, 
  Heart,
  MessageCircle,
  Pin,
  Save,
  Trash2,
  FolderOpen
} from 'lucide-react';

const App = () => {
  const [loadingIds, setLoadingIds] = useState<Record<string, boolean>>({});

  const simulateLoad = (id: string) => {
    setLoadingIds(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingIds(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen p-6 md:p-12">
      
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section: Note pinned to wall */}
        <header className="relative bg-white p-8 md:p-12 shadow-paper rounded-sm max-w-3xl mx-auto transform -rotate-1">
          {/* Push Pin */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-paper-red drop-shadow-md z-10">
             <Pin size={32} fill="currentColor" />
          </div>

          <div className="text-center space-y-4">
             <h1 className="font-display text-5xl md:text-7xl text-paper-text transform -rotate-2">
               Scrapbook <span className="text-paper-blue">UI</span>
             </h1>
             <p className="font-sans text-xl text-slate-500 font-semibold italic">
               "Creativity is messy and we love it that way."
             </p>

             <div className="flex justify-center gap-4 pt-4">
                <div className="relative group">
                   <div className="absolute -inset-1 bg-paper-yellow/50 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
                   <Button variant="primary" size="lg" leftIcon={<PenTool size={20} />}>Start Creating</Button>
                </div>
                <Button variant="secondary" size="lg" rightIcon={<FolderOpen size={20} />}>Browse</Button>
             </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
          
          {/* Left Column: Sticker Sheet */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-paper-card p-6 rounded-3xl shadow-paper relative">
              {/* Tape Effect */}
              <div className="absolute -top-3 left-10 w-24 h-8 bg-paper-tape backdrop-blur-sm -rotate-2 shadow-sm"></div>
              
              <h3 className="font-display text-2xl mb-6 text-slate-700">Tools & Stickers</h3>
              
              <div className="space-y-4">
                 <Button fullWidth variant="retro" className="justify-between group">
                    <span>Sticker Pack</span>
                    <Sticker size={20} className="group-hover:animate-wiggle" />
                 </Button>
                 <Button fullWidth variant="accent" className="justify-between group">
                    <span>Cut Tool</span>
                    <Scissors size={20} className="group-hover:rotate-90 transition-transform" />
                 </Button>
                 <Button fullWidth variant="success" className="justify-between group">
                    <span>Add Photo</span>
                    <ImageIcon size={20} />
                 </Button>
              </div>

              <div className="mt-8 border-t-2 border-dashed border-slate-200 pt-6">
                 <div className="flex gap-2 justify-center">
                    <Button variant="secondary" rounded="full" size="sm" className="w-10 h-10 p-0 shadow-sm border-0 bg-pink-100 text-pink-500 hover:bg-pink-200">
                       <Heart size={18} fill="currentColor" />
                    </Button>
                    <Button variant="secondary" rounded="full" size="sm" className="w-10 h-10 p-0 shadow-sm border-0 bg-blue-100 text-blue-500 hover:bg-blue-200">
                       <MessageCircle size={18} />
                    </Button>
                    <Button variant="secondary" rounded="full" size="sm" className="w-10 h-10 p-0 shadow-sm border-0 bg-slate-100 text-slate-500 hover:bg-slate-200">
                       <Pin size={18} />
                    </Button>
                 </div>
              </div>
            </div>

            {/* Note Card */}
            <div className="bg-paper-yellow p-6 shadow-paper transform rotate-2">
               <div className="font-display text-xl mb-2 text-paper-text/80">Don't Forget!</div>
               <ul className="list-disc list-inside font-semibold text-slate-700 space-y-2 font-sans">
                 <li>Buy more glue</li>
                 <li>Print photos</li>
                 <li>Design update meeting</li>
               </ul>
            </div>
          </div>

          {/* Right Column: Canvas/Showcase */}
          <div className="md:col-span-8">
             <div className="bg-white p-8 rounded-sm shadow-paper min-h-[400px] relative">
                {/* Corner Tapes */}
                <div className="absolute -top-3 -right-3 w-32 h-8 bg-paper-tape backdrop-blur-sm rotate-45 shadow-sm z-10"></div>
                <div className="absolute -bottom-3 -left-3 w-32 h-8 bg-paper-tape backdrop-blur-sm rotate-45 shadow-sm z-10"></div>
                
                <h2 className="font-display text-3xl mb-8 text-center text-slate-800">Components Gallery</h2>

                <div className="grid gap-8">
                   
                   {/* Size Section */}
                   <div className="space-y-4">
                      <div className="flex items-center gap-2">
                         <span className="font-display text-xl text-slate-400">01.</span>
                         <h3 className="font-bold text-lg text-slate-600 border-b-2 border-paper-blue/30 px-2 inline-block">Sizes</h3>
                      </div>
                      <div className="flex flex-wrap items-end gap-3 p-4 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                         <Button size="xs" variant="primary">Tiny</Button>
                         <Button size="sm" variant="primary">Small</Button>
                         <Button size="md" variant="primary">Medium</Button>
                         <Button size="lg" variant="primary">Large</Button>
                         <Button size="xl" variant="primary">Huge</Button>
                      </div>
                   </div>

                   {/* Action Section */}
                   <div className="space-y-4">
                      <div className="flex items-center gap-2">
                         <span className="font-display text-xl text-slate-400">02.</span>
                         <h3 className="font-bold text-lg text-slate-600 border-b-2 border-paper-red/30 px-2 inline-block">Actions</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                         <div className="bg-paper-blue/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4">
                            <p className="font-display text-paper-blue transform -rotate-2">Click to Save!</p>
                            <Button 
                              variant="primary" 
                              loading={loadingIds['save']}
                              onClick={() => simulateLoad('save')}
                              leftIcon={<Save size={18} />}
                              size="lg"
                              rounded="full"
                            >
                              Save Draft
                            </Button>
                         </div>

                         <div className="bg-paper-red/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4">
                            <p className="font-display text-paper-red transform rotate-2">Danger Zone</p>
                            <Button 
                              variant="danger" 
                              loading={loadingIds['del']}
                              onClick={() => simulateLoad('del')}
                              leftIcon={<Trash2 size={18} />}
                              rounded="none"
                              className="skew-x-[-10deg]"
                            >
                              Delete All
                            </Button>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="text-center pt-12 pb-6">
           <div className="inline-block relative">
              <span className="font-display text-2xl text-slate-400">Handcrafted with ❤️</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="#cbd5e1" strokeWidth="2" fill="none" />
              </svg>
           </div>
        </footer>

      </div>
    </div>
  );
};

export default App;