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
  MousePointer2
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
    <div className="min-h-screen bg-[#f0f0f0] text-gray-900 font-sans p-4 md:p-8" 
         style={{
           backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)',
           backgroundSize: '24px 24px'
         }}>
      
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="bg-white border-2 border-black shadow-neo rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2">NEO-UI<span className="text-violet-600">.</span></h1>
              <p className="text-lg font-bold text-gray-600">Distinctive. Bold. Consistent.</p>
            </div>
            <div className="flex gap-3">
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
              >
                Get Started
              </Button>
            </div>
          </div>
        </header>

        {/* Section: Palette */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white rounded font-bold">1</div>
            <h2 className="text-2xl font-bold">Theme Palette</h2>
          </div>
          <div className="bg-white p-8 rounded-xl border-2 border-black shadow-neo">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="flex flex-col gap-3">
                <Button variant="primary">Primary</Button>
                <span className="text-xs font-mono text-center">Violet-600</span>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="secondary">Secondary</Button>
                <span className="text-xs font-mono text-center">White</span>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="accent">Accent</Button>
                <span className="text-xs font-mono text-center">Yellow-400</span>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="retro">Retro</Button>
                <span className="text-xs font-mono text-center">Orange-500</span>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="danger">Danger</Button>
                <span className="text-xs font-mono text-center">Rose-500</span>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="ghost">Ghost</Button>
                <span className="text-xs font-mono text-center">Transparent</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Sizes & Radius */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white rounded font-bold">2</div>
            <h2 className="text-2xl font-bold">Shape & Size</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             {/* Sizes */}
            <div className="bg-white p-8 rounded-xl border-2 border-black shadow-neo flex flex-col items-start gap-4">
              <h3 className="text-lg font-bold border-b-2 border-gray-200 w-full pb-2 mb-2">Scale</h3>
              <Button size="xs" variant="secondary">Extra Small</Button>
              <Button size="sm" variant="secondary">Small Size</Button>
              <Button size="md" variant="secondary">Medium Standard</Button>
              <Button size="lg" variant="secondary">Large Button</Button>
              <Button size="xl" variant="secondary">Extra Large</Button>
            </div>

            {/* Radius */}
            <div className="bg-white p-8 rounded-xl border-2 border-black shadow-neo flex flex-col items-start gap-4">
              <h3 className="text-lg font-bold border-b-2 border-gray-200 w-full pb-2 mb-2">Geometry</h3>
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">rounded="none"</span>
                  <Button rounded="none" variant="retro">Sharp Edge</Button>
                </div>
                <div className="flex items-center justify-between">
                   <span className="font-mono text-sm">rounded="default"</span>
                  <Button rounded="default" variant="accent">Smooth Corner</Button>
                </div>
                <div className="flex items-center justify-between">
                   <span className="font-mono text-sm">rounded="full"</span>
                  <Button rounded="full" variant="primary">Pill Shape</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Functionality */}
        <section>
           <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white rounded font-bold">3</div>
            <h2 className="text-2xl font-bold">Interactive States</h2>
          </div>

          <div className="bg-yellow-50 p-8 rounded-xl border-2 border-black shadow-neo">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Loading */}
              <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                  <Settings size={20} /> Asynchronous
                </h4>
                <div className="flex flex-col gap-3">
                  <Button 
                    variant="primary" 
                    fullWidth 
                    loading={loadingIds['btn1']} 
                    onClick={() => simulateLoad('btn1')}
                  >
                    Click to Save
                  </Button>
                  <Button 
                    variant="secondary" 
                    fullWidth 
                    loading={loadingIds['btn2']} 
                    onClick={() => simulateLoad('btn2')}
                  >
                    Processing
                  </Button>
                </div>
              </div>

              {/* Icons */}
              <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                  <MousePointer2 size={20} /> Composition
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="danger" leftIcon={<Trash2 size={18} />}>Delete</Button>
                  <Button variant="secondary" rightIcon={<Download size={18} />}>Export</Button>
                  <Button variant="accent" rounded="full" className="w-12 h-12 p-0 flex items-center justify-center">
                    <Zap size={20} fill="black" />
                  </Button>
                </div>
              </div>

              {/* Disabled */}
              <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                  <Settings size={20} /> Disabled States
                </h4>
                <div className="flex gap-3">
                  <Button variant="primary" disabled>Locked</Button>
                  <Button variant="secondary" disabled>Inactive</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Playground / Use Case */}
        <section className="mb-20">
          <div className="bg-violet-600 rounded-xl border-2 border-black shadow-neo overflow-hidden text-white">
            <div className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-black">Ready to build something loud?</h2>
              <p className="text-violet-100 text-xl max-w-2xl mx-auto">
                Components designed to pop off the screen. Consistent interaction models with a unique visual signature.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <div className="flex items-center bg-black/20 p-2 rounded-xl border-2 border-white/20 backdrop-blur-sm gap-2">
                  <Button 
                    variant="danger" 
                    onClick={() => setLikes(p => p + 1)}
                    leftIcon={<Heart size={18} fill={likes > 128 ? "white" : "none"} />}
                  >
                    {likes} Likes
                  </Button>
                  <Button variant="secondary" leftIcon={<MessageCircle size={18} />}>
                    Comment
                  </Button>
                  <Button variant="accent" leftIcon={<Share2 size={18} />}>
                    Share
                  </Button>
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