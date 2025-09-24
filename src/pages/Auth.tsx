import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Lock, User, Mail, Gamepad2, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Auth() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-[url('/minecraft-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md px-4">
        {/* Logo and title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary shadow-glow mb-4">
            <Gamepad2 className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MCLauncher
          </h1>
          <p className="text-muted-foreground mt-2">Добро пожаловать в мир приключений</p>
        </div>

        {/* Auth card */}
        <Card className="backdrop-blur-md bg-card/80 border-glass-border shadow-lg">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-secondary/50">
              <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Вход
              </TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Регистрация
              </TabsTrigger>
            </TabsList>

            {/* Login form */}
            <TabsContent value="login" className="p-6 space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Имя пользователя
                  </Label>
                  <Input
                    id="username"
                    placeholder="Ваш никнейм"
                    className="bg-secondary/50 border-glass-border focus:border-primary transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    Пароль
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-secondary/50 border-glass-border focus:border-primary transition-all"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="remember" 
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      className="border-glass-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                      Запомнить меня
                    </Label>
                  </div>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Забыли пароль?
                  </Button>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Вход...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Войти
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </form>
            </TabsContent>

            {/* Register form */}
            <TabsContent value="register" className="p-6 space-y-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reg-username" className="text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Имя пользователя
                  </Label>
                  <Input
                    id="reg-username"
                    placeholder="Придумайте никнейм"
                    className="bg-secondary/50 border-glass-border focus:border-primary transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-secondary/50 border-glass-border focus:border-primary transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reg-password" className="text-foreground flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    Пароль
                  </Label>
                  <Input
                    id="reg-password"
                    type="password"
                    placeholder="Минимум 8 символов"
                    className="bg-secondary/50 border-glass-border focus:border-primary transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-foreground flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Подтвердите пароль
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Повторите пароль"
                    className="bg-secondary/50 border-glass-border focus:border-primary transition-all"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    className="border-glass-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                    Я согласен с условиями использования
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Регистрация...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Создать аккаунт
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Footer info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Защищено системой антифрода • v1.20.1
          </p>
        </div>
      </div>
    </div>
  );
}