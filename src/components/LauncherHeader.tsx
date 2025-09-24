import { useState, useEffect } from "react";
import { Wifi, WifiOff } from "lucide-react";

export function LauncherHeader() {
  const [isOnline, setIsOnline] = useState(true);
  const [currentPlayers, setCurrentPlayers] = useState(0);

  useEffect(() => {
    // Simulate online status check
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1);
      setCurrentPlayers(Math.floor(Math.random() * 150));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 backdrop-blur-md bg-card/50 border-b border-border">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          MCLauncher
        </h1>
        <span className="text-sm text-muted-foreground">v1.20.1</span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="w-4 h-4 text-primary" />
          ) : (
            <WifiOff className="w-4 h-4 text-destructive" />
          )}
          <span className="text-sm text-foreground">
            {isOnline ? "На серверах" : "Офлайн"}
          </span>
          <span className="text-sm font-semibold text-primary">
            {currentPlayers} игроков
          </span>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Готов к запуску
        </div>
      </div>
    </div>
  );
}