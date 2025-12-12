import React, { useState } from 'react';
import { Button } from './components/Button';
import { 
  Activity, 
  Cpu, 
  Wifi, 
  Battery, 
  ShieldAlert, 
  Terminal,
  Crosshair,
  Radio,
  Power,
  Database,
  Lock,
  Zap
} from 'lucide-react';

const App = () => {
  const [loadingIds, setLoadingIds] = useState<Record<string, boolean>>({});

  const simulateLoad = (id: string) => {
    setLoadingIds(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingIds(prev => ({ ...prev, [id]: false }));
    }, 2500);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 relative bg-cyber-bg bg-[size:40px_40px] bg-grid-pattern">
      
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyber-cyan/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Header Panel (Top) */}
        <div className="lg:col-span-12 bg-cyber-panel/80 border border-cyber-cyan/30 p-6 clip-corner relative backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1 text-cyber-cyan/60 text-xs tracking-widest">
                <Activity size={14} className="animate-pulse" />
                <span>SYSTEM ONLINE</span>
                <span className="ml-2">:: V.2.0.45</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
                Cyber<span className="text-cyber-cyan">HUD</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="text-right hidden md:block">
                 <div className="text-cyber-cyan font-mono text-xl">12:45:00</div>
                 <div className="text-xs text-cyber-cyan/50 tracking-[0.2em]">UNIX_EPOCH</div>
               </div>
               <Button variant="danger" size="lg" rounded="full" rightIcon={<Power size={18} />}>
                 Log Out
               </Button>
            </div>
          </div>
          
          {/* Decorative Corner Markers */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan"></div>
        </div>

        {/* Left Sidebar (Stats) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Status Card */}
          <div className="bg-cyber-panel/50 border border-cyber-cyan/20 p-5 clip-corner-sm">
            <h3 className="text-cyber-cyan text-sm tracking-widest mb-4 border-b border-cyber-cyan/20 pb-2 flex items-center justify-between">
              <span>MODULES</span>
              <Wifi size={14} />
            </h3>
            <div className="space-y-3">
              <Button variant="ghost" fullWidth className="justify-between group">
                <span className="group-hover:translate-x-1 transition-transform">NET_LINK</span>
                <span className="text-xs bg-cyber-cyan/10 px-1 text-cyber-cyan">ACTV</span>
              </Button>
              <Button variant="ghost" fullWidth className="justify-between group">
                <span className="group-hover:translate-x-1 transition-transform">FIREWALL</span>
                <span className="text-xs bg-cyber-green/10 px-1 text-cyber-green">SECURE</span>
              </Button>
              <Button variant="ghost" fullWidth className="justify-between group">
                <span className="group-hover:translate-x-1 transition-transform">DATABASE</span>
                <span className="text-xs bg-cyber-yellow/10 px-1 text-cyber-yellow">LOAD</span>
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-cyber-panel/50 border border-cyber-pink/20 p-5 clip-corner-sm">
             <h3 className="text-cyber-pink text-sm tracking-widest mb-4 border-b border-cyber-pink/20 pb-2 flex items-center justify-between">
              <span>OVERRIDE</span>
              <ShieldAlert size={14} />
            </h3>
             <div className="grid grid-cols-2 gap-3">
               <Button variant="accent" size="sm">Purge</Button>
               <Button variant="accent" size="sm">Reset</Button>
               <Button variant="danger" size="sm" fullWidth className="col-span-2">Emergency Stop</Button>
             </div>
          </div>

        </div>

        {/* Main Interface (Center) */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Feature Showcase */}
          <div className="bg-cyber-panel border border-cyber-cyan/20 p-8 clip-corner relative overflow-hidden">
             {/* Background Grid Accent */}
             <div className="absolute right-0 top-0 w-1/2 h-full bg-[linear-gradient(45deg,transparent_25%,rgba(0,243,255,0.05)_25%,rgba(0,243,255,0.05)_50%,transparent_50%,transparent_75%,rgba(0,243,255,0.05)_75%,rgba(0,243,255,0.05)_100%)] bg-[length:20px_20px]"></div>

             <div className="relative z-10">
               <div className="inline-flex items-center gap-2 text-cyber-yellow mb-2">
                 <Radio size={16} className="animate-pulse" />
                 <span className="text-xs tracking-[0.3em]">LIVE FEED</span>
               </div>
               <h2 className="font-display text-3xl text-white mb-6 uppercase">
                 Command Center <span className="text-cyber-cyan">Interface</span>
               </h2>

               {/* Button Palette Grid */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                 <div className="space-y-2">
                    <p className="text-[10px] text-cyber-cyan/50 tracking-widest uppercase">Primary Core</p>
                    <Button variant="primary" fullWidth>Deploy</Button>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] text-cyber-cyan/50 tracking-widest uppercase">System Core</p>
                    <Button variant="secondary" fullWidth>Config</Button>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] text-cyber-cyan/50 tracking-widest uppercase">Neural Link</p>
                    <Button variant="accent" fullWidth>Connect</Button>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] text-cyber-cyan/50 tracking-widest uppercase">Weapon Sys</p>
                    <Button variant="danger" fullWidth>Engage</Button>
                 </div>
               </div>

               {/* Interactive Loader Area */}
               <div className="border border-cyber-cyan/30 bg-black/40 p-6 clip-corner-sm flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 border border-cyber-green text-cyber-green flex items-center justify-center bg-cyber-green/5">
                        <Cpu size={24} />
                     </div>
                     <div>
                        <h4 className="text-white font-bold">PROCESSOR_UNIT_01</h4>
                        <p className="text-cyber-green text-xs">Ready for instructions</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Button 
                       loading={loadingIds['compile']} 
                       onClick={() => simulateLoad('compile')}
                       variant="success" 
                       rightIcon={<Database size={16} />}
                     >
                       Compile Data
                     </Button>
                     <Button 
                       loading={loadingIds['scan']} 
                       onClick={() => simulateLoad('scan')}
                       variant="primary" 
                       leftIcon={<Crosshair size={16} />}
                     >
                       Scan Target
                     </Button>
                  </div>
               </div>
             </div>
          </div>

          {/* Size & Shape Matrix */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyber-panel/60 border border-cyber-cyan/10 p-6 clip-corner-sm">
               <h3 className="text-xs text-cyber-cyan/60 tracking-widest mb-6">SIZE_MATRIX</h3>
               <div className="flex flex-wrap items-end gap-3">
                 <Button size="xs" variant="primary">XS</Button>
                 <Button size="sm" variant="primary">SM</Button>
                 <Button size="md" variant="primary">MD</Button>
                 <Button size="lg" variant="primary">LG</Button>
               </div>
            </div>
            
             <div className="bg-cyber-panel/60 border border-cyber-cyan/10 p-6 clip-corner-sm">
               <h3 className="text-xs text-cyber-cyan/60 tracking-widest mb-6">SHAPE_PROTOCOLS</h3>
               <div className="flex flex-wrap items-center gap-4">
                 <Button variant="accent">Standard</Button>
                 <Button variant="accent" rounded="full">Rounded</Button>
                 <Button variant="accent" className="w-12 h-12 p-0 flex items-center justify-center">
                    <Lock size={18} />
                 </Button>
                 <Button variant="accent" rounded="full" className="w-12 h-12 p-0 flex items-center justify-center border-dashed">
                    <Zap size={18} />
                 </Button>
               </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer / System Line */}
      <div className="fixed bottom-0 left-0 w-full bg-cyber-bg border-t border-cyber-cyan/20 p-2 px-8 flex justify-between items-center text-[10px] text-cyber-cyan/40 z-50">
        <div className="flex gap-4">
          <span>MEM: 64TB</span>
          <span>CPU: 12%</span>
          <span>TEMP: 45°C</span>
        </div>
        <div className="animate-pulse">Connected to Mainframe</div>
      </div>

    </div>
  );
};

export default App;