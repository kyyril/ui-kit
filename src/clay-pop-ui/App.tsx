import React, { useState } from 'react';
import { Button } from './components/Button';
import { 
  Cloud, 
  Heart, 
  Star, 
  Music, 
  Smile, 
  Gift,
  Coffee,
  Sparkles,
  LayoutGrid,
  Palette
} from 'lucide-react';

const App = () => {
  const [loadingIds, setLoadingIds] = useState<Record<string, boolean>>({});
  const [loveCount, setLoveCount] = useState(142);

  const simulateLoad = (id: string) => {
    setLoadingIds(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingIds(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4 sm:px-6">
      
      {/* Background Blobs (Decoration) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-200/40 rounded-full blur-3xl animate-float -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30rem] h-[30rem] bg-blue-200/40 rounded-full blur-3xl animate-float -z-10" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[20%] w-[20rem] h-[20rem] bg-pink-200/40 rounded-full blur-3xl animate-float -z-10" style={{ animationDelay: '4s' }} />

      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-clay-btn mb-4">
             <Cloud className="text-clay-accent" size={32} fill="currentColor" fillOpacity={0.2} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-700 tracking-tight">
            Clay<span className="text-clay-primary">Pop</span> UI
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Soft, squishy, and delightful interface components for friendly apps.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button variant="primary" rounded="full" rightIcon={<Sparkles size={18} />}>Get Started</Button>
            <Button variant="secondary" rounded="full">Documentation</Button>
          </div>
        </div>

        {/* Main Showcase Card */}
        <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-clay-card border border-white/40">
          
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-clay-warning/20 p-2 rounded-xl">
              <Palette className="text-clay-warning" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-700">Pastel Palette</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
             <div className="flex flex-col items-center gap-3">
               <Button variant="primary" rounded="default" className="w-full">Primary</Button>
               <span className="text-sm font-semibold text-gray-400">Lavender</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <Button variant="accent" rounded="default" className="w-full">Accent</Button>
               <span className="text-sm font-semibold text-gray-400">Sky</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <Button variant="success" rounded="default" className="w-full">Success</Button>
               <span className="text-sm font-semibold text-gray-400">Mint</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <Button variant="danger" rounded="default" className="w-full">Danger</Button>
               <span className="text-sm font-semibold text-gray-400">Coral</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <Button variant="retro" rounded="default" className="w-full">Retro</Button>
               <span className="text-sm font-semibold text-gray-400">Sunshine</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <Button variant="secondary" rounded="default" className="w-full">Secondary</Button>
               <span className="text-sm font-semibold text-gray-400">Cloud</span>
             </div>
          </div>
        </div>

        {/* Interactive Playground */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Sizes & Shapes */}
          <div className="bg-white/80 rounded-[2rem] p-8 shadow-clay-card border border-white">
             <div className="flex items-center gap-3 mb-6">
              <div className="bg-clay-accent/20 p-2 rounded-xl">
                <LayoutGrid className="text-clay-accent" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-700">Bubble Shapes</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3 items-center justify-center bg-gray-50 p-6 rounded-3xl border border-dashed border-gray-200">
                <Button size="xs" variant="primary">Mini</Button>
                <Button size="sm" variant="primary">Small</Button>
                <Button size="md" variant="primary">Medium</Button>
                <Button size="lg" variant="primary">Large</Button>
              </div>

              <div className="flex justify-between items-center gap-2">
                 <Button rounded="sm" variant="accent" className="flex-1">Boxy</Button>
                 <Button rounded="default" variant="accent" className="flex-1">Soft</Button>
                 <Button rounded="full" variant="accent" className="flex-1">Round</Button>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive States */}
          <div className="bg-white/80 rounded-[2rem] p-8 shadow-clay-card border border-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-clay-danger/20 p-2 rounded-xl">
                <Heart className="text-clay-danger" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-700">Squishy States</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-50 p-6 rounded-3xl flex items-center justify-around">
                <Button 
                  variant="primary" 
                  loading={loadingIds['load1']}
                  onClick={() => simulateLoad('load1')}
                  rounded="full"
                >
                  Click Me
                </Button>
                
                <div className="flex items-center bg-white p-1 rounded-full shadow-sm">
                   <Button 
                    variant="danger" 
                    rounded="full" 
                    size="sm"
                    className="w-10 h-10 p-0"
                    onClick={() => setLoveCount(loveCount + 1)}
                   >
                     <Heart size={18} fill="currentColor" />
                   </Button>
                   <span className="font-bold text-gray-600 px-4 min-w-[3rem] text-center">{loveCount}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="secondary" fullWidth leftIcon={<Music size={18} />}>Playlist</Button>
                <Button variant="secondary" fullWidth rightIcon={<Coffee size={18} />}>Coffee</Button>
                <Button variant="secondary" fullWidth leftIcon={<Smile size={18} />}>Friends</Button>
                <Button variant="secondary" fullWidth rightIcon={<Gift size={18} />}>Rewards</Button>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-clay-primary to-clay-accent rounded-[2.5rem] p-10 text-center text-white shadow-clay-float relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
             <Star size={120} fill="white" />
           </div>
           
           <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to make it pop?</h2>
           <p className="opacity-90 mb-8 max-w-lg mx-auto relative z-10 font-medium text-lg">
             Create interfaces that users just want to touch. Friendly, accessible, and full of personality.
           </p>
           
           <Button 
            variant="secondary" 
            size="xl" 
            rounded="full" 
            className="text-clay-primary font-bold shadow-lg"
           >
             Download Kit
           </Button>
        </div>

      </div>
    </div>
  );
};

export default App;