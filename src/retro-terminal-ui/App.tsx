import React, { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { 
  Terminal, 
  Cpu, 
  AlertTriangle, 
  Save, 
  Power, 
  Database,
  ShieldAlert,
  Wifi,
  Square
} from 'lucide-react';

const App = () => {
  const [loadingIds, setLoadingIds] = useState<Record<string, boolean>>({});
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [bootSequence, setBootSequence] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    // Simulate CRT warm up
    const bootTimer = setTimeout(() => setBootSequence(false), 800);
    return () => {
      clearInterval(timer);
      clearTimeout(bootTimer);
    };
  }, []);

  const simulateProcess = (id: string) => {
    setLoadingIds(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingIds(prev => ({ ...prev, [id]: false }));
    }, 2500);
  };

  if (bootSequence) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-1 h-1 bg-term-green animate-[ping_0.2s_ease-in-out_infinite]" />
      </div>
    )
  }

  return (
    <div className="min-h-screen font-mono relative">
      {/* CRT Scanline Overlay */}
      <div className="fixed inset-0 bg-scanlines bg-scanlines z-50 pointer-events-none opacity-20 mix-blend-overlay"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] z-40 pointer-events-none"></div>

      <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto text-term-green">
        
        {/* Top Bar */}
        <div className="border-b-2 border-term-green pb-4 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="text-4xl md:text-6xl uppercase tracking-tighter animate-pulse mb-2 text-term-green shadow-[0_0_15px_rgba(51,255,0,0.6)]">
              Term_UI<span className="text-term-green-dim">.SYS</span>
            </div>
            <p className="text-xl uppercase opacity-80">{'>'} System Ready // User: ADMIN</p>
          </div>
          <div className="text-right">
             <div className="text-2xl">{currentTime}</div>
             <div className="text-sm opacity-60">MEM: 640K OK</div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Controls Panel */}
          <section className="lg:col-span-8 border-2 border-term-green p-1 relative">
            <div className="absolute -top-3 left-4 bg-term-black px-2 text-term-green uppercase font-bold">
              [ COMMAND_MODULE ]
            </div>
            
            <div className="p-6 md:p-8 space-y-8 bg-term-green/5">
              
              {/* Variant Row */}
              <div className="space-y-4">
                <h3 className="text-lg uppercase border-b border-dashed border-term-green/40 pb-2 mb-4 w-full flex justify-between">
                  <span>{'>'} Select_Operation_Mode</span>
                  <span className="animate-pulse">_</span>
                </h3>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" shadow>INIT_CORE</Button>
                  <Button variant="retro" shadow>OVERCLOCK</Button>
                  <Button variant="danger" shadow>PURGE_DATA</Button>
                  <Button variant="accent" shadow>NET_LINK</Button>
                  <Button variant="secondary">STANDBY</Button>
                </div>
              </div>

              {/* Sizes Row */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg uppercase border-b border-dashed border-term-green/40 pb-2 mb-4 w-full">
                  {'>'} Buffer_Allocation_Size
                </h3>
                <div className="flex flex-wrap items-end gap-4 border-l-2 border-term-green pl-4">
                   <Button size="xs" variant="primary">16kb</Button>
                   <Button size="sm" variant="primary">32kb</Button>
                   <Button size="md" variant="primary">64kb</Button>
                   <Button size="lg" variant="primary">128kb</Button>
                   <Button size="xl" variant="primary">256kb</Button>
                </div>
              </div>

              {/* Functional Test */}
               <div className="space-y-4 pt-4">
                <h3 className="text-lg uppercase border-b border-dashed border-term-green/40 pb-2 mb-4 w-full">
                   {'>'} Async_Processes
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button 
                    variant="primary" 
                    fullWidth 
                    loading={loadingIds['proc1']} 
                    onClick={() => simulateProcess('proc1')}
                    leftIcon={<Cpu size={18} />}
                  >
                    COMPILE_SOURCE
                  </Button>
                   <Button 
                    variant="danger" 
                    fullWidth 
                    loading={loadingIds['proc2']} 
                    onClick={() => simulateProcess('proc2')}
                    leftIcon={<ShieldAlert size={18} />}
                  >
                    FIREWALL_RESET
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Side Panel: Info */}
          <section className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Status Box */}
            <div className="border-2 border-term-amber p-6 bg-term-amber/5 text-term-amber">
              <h2 className="text-xl uppercase font-bold mb-4 flex items-center gap-2">
                <AlertTriangle size={24} /> WARNING
              </h2>
              <p className="text-lg leading-tight mb-6 uppercase">
                Unathorized visual styles detected. System defaulting to high-contrast fallback mode.
              </p>
              <div className="flex gap-2">
                <Button variant="retro" size="sm" fullWidth>IGNORE</Button>
                <Button variant="retro" size="sm" fullWidth>DEBUG</Button>
              </div>
            </div>

            {/* Data Box */}
             <div className="border-2 border-dashed border-slate-600 p-6 flex-grow">
               <ul className="space-y-3 font-mono text-slate-400">
                 <li className="flex justify-between">
                   <span>{'>'} CPU_TEMP:</span>
                   <span className="text-term-green">45°C</span>
                 </li>
                 <li className="flex justify-between">
                   <span>{'>'} MEM_USAGE:</span>
                   <span className="text-term-amber">82%</span>
                 </li>
                 <li className="flex justify-between">
                   <span>{'>'} NETWORK:</span>
                   <span className="text-term-green animate-pulse">ONLINE</span>
                 </li>
                 <li className="flex justify-between">
                   <span>{'>'} UPTIME:</span>
                   <span>04:22:19</span>
                 </li>
               </ul>
               
               <div className="mt-8 pt-4 border-t border-dashed border-slate-600">
                  <Button variant="secondary" fullWidth leftIcon={<Power size={18} />}>
                    SYSTEM_HALT
                  </Button>
               </div>
             </div>

          </section>
        </div>

        {/* Footer Prompt */}
        <footer className="mt-12 border-t-2 border-term-green pt-6 text-xl flex items-center gap-2 animate-pulse">
           <Terminal size={24} />
           <span>A:\USERS\GUEST\COMMAND{'>'}</span>
           <span className="w-3 h-6 bg-term-green block"></span>
        </footer>

      </div>
    </div>
  );
};

export default App;