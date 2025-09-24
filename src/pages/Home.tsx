import { useState } from "react";
import { Play, Settings, Package, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import minecraftBg from "@/assets/minecraft-bg.jpg";

export function Home() {
  const navigate = useNavigate();
  const [isLaunching, setIsLaunching] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleLaunch = () => {
    setIsLaunching(true);
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLaunching(false);
          setProgress(0);
        }, 1000);
      }
      setProgress(currentProgress);
    }, 300);
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${minecraftBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/90" />
      
      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground drop-shadow-lg">
            MCLauncher
          </h1>
          <p className="text-xl text-muted-foreground">
            Минимум слов, максимум геймплея
          </p>
        </div>

        {/* Main action buttons */}
        <div className="flex flex-col items-center gap-4">
          {!isLaunching ? (
            <Button
              size="lg"
              onClick={handleLaunch}
              className="w-64 h-14 text-lg font-bold bg-gradient-primary hover:shadow-glow 
                       transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              ИГРАТЬ
            </Button>
          ) : (
            <div className="w-64 space-y-2">
              <Progress value={progress} className="h-14" />
              <p className="text-sm text-muted-foreground">
                Загрузка... {Math.round(progress)}%
              </p>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-3">
            <Button
              variant="secondary"
              size="default"
              onClick={() => navigate("/settings")}
              className="backdrop-blur-md bg-secondary/50 hover:bg-secondary/70 
                       border border-border hover:border-primary/30 transition-all"
            >
              <Settings className="mr-2 h-4 w-4" />
              НАСТРОЙКИ
            </Button>
            
            <Button
              variant="secondary"
              size="default"
              onClick={() => navigate("/mods")}
              className="backdrop-blur-md bg-secondary/50 hover:bg-secondary/70 
                       border border-border hover:border-primary/30 transition-all"
            >
              <Package className="mr-2 h-4 w-4" />
              СПИСОК МОДОВ
            </Button>
            
            <Button
              variant="secondary"
              size="default"
              onClick={() => navigate("/servers")}
              className="backdrop-blur-md bg-secondary/50 hover:bg-secondary/70 
                       border border-border hover:border-primary/30 transition-all"
            >
              <Server className="mr-2 h-4 w-4" />
              СЕРВЕРЫ
            </Button>
          </div>
        </div>

        {/* Version info */}
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-secondary/50 backdrop-blur-sm">
            Версия: 1.20.1
          </span>
          <span className="px-3 py-1 rounded-full bg-secondary/50 backdrop-blur-sm">
            Доступен
          </span>
        </div>
      </div>
    </div>
  );
}