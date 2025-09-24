import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Folder, Monitor, Cpu } from "lucide-react";

export function Settings() {
  const navigate = useNavigate();
  const [ram, setRam] = useState([4]);
  const [fullscreen, setFullscreen] = useState(false);
  const [installPath, setInstallPath] = useState("C:\\Users\\User\\AppData\\Roaming\\.minecraft");

  return (
    <div className="min-h-screen bg-gradient-dark p-8">
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className="mb-6 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        НАЗАД
      </Button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Настройки</h1>

        <div className="space-y-6">
          {/* RAM Settings */}
          <div className="backdrop-blur-md bg-card/50 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Настройки ОЗУ</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="ram" className="text-muted-foreground">
                  Выделенная память: {ram[0]} ГБ
                </Label>
                <Slider
                  id="ram"
                  min={1}
                  max={16}
                  step={1}
                  value={ram}
                  onValueChange={setRam}
                  className="mt-3"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Рекомендуется выделить минимум 2 ГБ для комфортной игры
                </p>
              </div>
            </div>
          </div>

          {/* Window Settings */}
          <div className="backdrop-blur-md bg-card/50 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Размеры окна</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="fullscreen" className="text-muted-foreground">
                  Полноэкранный режим
                </Label>
                <Switch
                  id="fullscreen"
                  checked={fullscreen}
                  onCheckedChange={setFullscreen}
                />
              </div>
              
              {!fullscreen && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="width" className="text-muted-foreground">Ширина</Label>
                    <Input
                      id="width"
                      type="number"
                      defaultValue="1280"
                      className="mt-2 bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height" className="text-muted-foreground">Высота</Label>
                    <Input
                      id="height"
                      type="number"
                      defaultValue="720"
                      className="mt-2 bg-secondary/50 border-border"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Installation Path */}
          <div className="backdrop-blur-md bg-card/50 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Folder className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Папка установки</h2>
            </div>
            
            <div className="flex gap-2">
              <Input
                value={installPath}
                onChange={(e) => setInstallPath(e.target.value)}
                className="flex-1 bg-secondary/50 border-border"
              />
              <Button variant="secondary">
                <Folder className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <Button
              variant="secondary"
              onClick={() => navigate("/")}
            >
              Отмена
            </Button>
            <Button
              className="bg-gradient-primary hover:shadow-glow"
              onClick={() => {
                // Save settings logic here
                navigate("/");
              }}
            >
              Сохранить настройки
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}