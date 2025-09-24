import { useState, useEffect } from "react";
import { Wifi, WifiOff, User, LogOut, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function LauncherHeader() {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(true);
  const [currentPlayers, setCurrentPlayers] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate logged in state
  const [username] = useState("Steve"); // Simulate username

  useEffect(() => {
    // Simulate online status check
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1);
      setCurrentPlayers(Math.floor(Math.random() * 150));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/auth");
  };

  return (
    <div className="flex items-center justify-between p-4 backdrop-blur-md bg-card/50 border-b border-border">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          MCLauncher
        </h1>
        <span className="text-sm text-muted-foreground">v1.20.1</span>
        
        {/* Auto-update indicator */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <Shield className="w-3 h-3 text-primary" />
          <span className="text-xs text-primary font-medium">Protected</span>
        </div>
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

        {/* User profile dropdown */}
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10 border-2 border-primary/20">
                  <AvatarImage src={`https://mc-heads.net/avatar/${username}`} alt={username} />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                    {username[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-card/95 backdrop-blur-md border-glass-border" align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{username}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    Premium аккаунт
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-glass-border" />
              <DropdownMenuItem 
                className="hover:bg-secondary/50 cursor-pointer"
                onClick={() => navigate("/settings")}
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Настройки</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="hover:bg-secondary/50 cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Профиль</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-glass-border" />
              <DropdownMenuItem 
                className="hover:bg-destructive/20 text-destructive cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Выйти</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button 
            variant="outline" 
            className="border-glass-border hover:bg-primary/10"
            onClick={() => navigate("/auth")}
          >
            <User className="w-4 h-4 mr-2" />
            Войти
          </Button>
        )}
      </div>
    </div>
  );
}