import React, { useState } from 'react';
import { Button } from './components/Button';
import { 
  Gamepad2, 
  Trophy, 
  Skull, 
  Heart, 
  Zap,
  Swords, // Changed from Sword to Swords based on common lucide exports, or we'll use a safer one if unsure
  Play,
  Settings,
  X
} from 'lucide-react';

const App = () => {
  const [loadingIds, setLoadingIds] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState(1337);

  const simulateLoad = (id: string) => {
    setLoadingIds(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingIds(prev => ({ ...prev, [id]: false }));
    }, 1500);
  };

  const incrementScore = () => setScore(s => s + 100);

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      
      {/* Game Title Header */}
      <header className="mb-12 text-center relative animate-float-pixel">
        <h1 className="font-pixel text-4xl md:text-6xl text-arcade-yellow drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-stroke mb-2">
          PIXEL<span className="text-arcade-cyan">UI</span>
        </h1>
        <div className="flex items-center justify-center gap-2 text-arcade-neon font-pixel text-xs md:text-sm">
          <Gamepad2 size={16} />
          <span>PRESS START</span>
          <Gamepad2 size={16} />
        </div>
      </header>

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Stats Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-arcade-panel border-4 border-white shadow-pixel p-1">
            <div className="border-2 border-dashed border-white/20 p-4 space-y-4">
              <h2 className="font-pixel text-arcade-green text-sm text-center border-b-4 border-arcade-green pb-2 mb-4">PLAYER STATS</h2>
              
              <div className="flex justify-between items-center font-mono text-xl">
                <span className="text-arcade-cyan">SCORE</span>
                <span className="text-white">{score.toString().padStart(6, '0')}</span>
              </div>
              
              <div className="flex justify-between items-center font-mono text-xl">
                <span className="text-arcade-red">HP</span>
                <div className="flex gap-1">
                  <Heart size={20} fill="#ff3333" className="text-arcade-red" />
                  <Heart size={20} fill="#ff3333" className="text-arcade-red" />
                  <Heart size={20} fill="#ff3333" className="text-arcade-red" />
                  <Heart size={20} className="text-arcade-red opacity-50" />
                </div>
              </div>

              <div className="flex justify-between items-center font-mono text-xl">
                <span className="text-arcade-yellow">LVL</span>
                <span className="text-white">99</span>
              </div>
            </div>
          </div>

          {/* Controller Menu */}
          <div className="bg-arcade-panel border-4 border-black p-4 shadow-pixel-lg">
             <div className="space-y-3">
               <Button fullWidth variant="primary" leftIcon={<Play size={16} />}>CONTINUE</Button>
               <Button fullWidth variant="secondary" leftIcon={<Trophy size={16} />}>LEADERBOARD</Button>
               <Button fullWidth variant="retro" leftIcon={<Settings size={16} />}>OPTIONS</Button>
               <Button fullWidth variant="danger" leftIcon={<X size={16} />}>QUIT GAME</Button>
             </div>
          </div>
        </div>

        {/* Right Column: Inventory / Actions */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Action Area */}
          <div className="bg-white border-4 border-black p-6 shadow-pixel-lg relative">
             <div className="absolute top-0 right-0 bg-arcade-red text-white font-pixel text-[10px] px-2 py-1 border-b-4 border-l-4 border-black">
               BOSS BATTLE
             </div>

             <h2 className="font-pixel text-black text-lg mb-6 flex items-center gap-3">
               <Skull size={24} />
               <span>CHOOSE ACTION</span>
             </h2>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                   <p className="font-mono text-black font-bold">ATTACK</p>
                   <Button 
                     fullWidth 
                     variant="danger" 
                     loading={loadingIds['atk']}
                     onClick={() => {
                       simulateLoad('atk');
                       incrementScore();
                     }}
                     leftIcon={<Swords size={18} />}
                   >
                     POWER STRIKE
                   </Button>
                </div>
                <div className="space-y-2">
                   <p className="font-mono text-black font-bold">MAGIC</p>
                   <Button 
                     fullWidth 
                     variant="accent"
                     loading={loadingIds['mag']}
                     onClick={() => simulateLoad('mag')} 
                     leftIcon={<Zap size={18} />}
                   >
                     THUNDER BOLT
                   </Button>
                </div>
                <div className="space-y-2">
                   <p className="font-mono text-black font-bold">ITEM</p>
                   <Button 
                     fullWidth 
                     variant="success" 
                     loading={loadingIds['heal']}
                     onClick={() => simulateLoad('heal')}
                     leftIcon={<Heart size={18} />}
                   >
                     POTION
                   </Button>
                </div>
                <div className="space-y-2">
                   <p className="font-mono text-black font-bold">DEFEND</p>
                   <Button fullWidth variant="secondary" disabled>SHIELD (0)</Button>
                </div>
             </div>
          </div>

          {/* Size Gallery */}
          <div className="bg-arcade-panel border-4 border-arcade-cyan p-6 shadow-pixel">
             <h3 className="font-pixel text-arcade-cyan text-sm mb-6 text-center">-- UI KIT GALLERY --</h3>
             
             <div className="flex flex-wrap items-center justify-center gap-4 bg-black/20 p-4 border-2 border-arcade-cyan/30">
                <Button size="xs" variant="retro">XS</Button>
                <Button size="sm" variant="retro">SMALL</Button>
                <Button size="md" variant="retro">MEDIUM</Button>
                <Button size="lg" variant="retro">LARGE</Button>
             </div>

             <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="ghost" className="col-span-2">GHOST_BTN</Button>
                <Button variant="primary" className="col-span-2" loading>LOADING</Button>
             </div>
          </div>
        </div>

      </div>

      {/* Footer Dialog Box */}
      <div className="fixed bottom-0 left-0 w-full p-4 pointer-events-none">
        <div className="max-w-3xl mx-auto bg-black border-4 border-white p-4 shadow-pixel text-white font-mono text-xl leading-relaxed pointer-events-auto flex gap-4 items-start animate-float-pixel">
           <div className="w-2 h-2 bg-white mt-3 animate-blink flex-shrink-0"></div>
           <p>
             WELCOME TO THE ARCADE. CHOOSE YOUR BUTTON STYLE WISELY, WARRIOR. 
             THE <span className="text-arcade-cyan">PIXEL</span> THEME IS NOW ACTIVE.
           </p>
           <div className="w-4 h-4 border-b-2 border-r-2 border-white ml-auto mt-auto animate-pulse"></div>
        </div>
      </div>

    </div>
  );
};

export default App;