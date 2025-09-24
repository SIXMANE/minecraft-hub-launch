import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Package, Search, Download, Check } from "lucide-react";

interface Mod {
  id: string;
  name: string;
  description: string;
  version: string;
  author: string;
  enabled: boolean;
  size: string;
  installed: boolean;
}

const initialMods: Mod[] = [
  {
    id: "1",
    name: "OptiFine",
    description: "Оптимизация производительности и расширенные настройки графики",
    version: "1.20.1",
    author: "sp614x",
    enabled: true,
    size: "6.2 MB",
    installed: true,
  },
  {
    id: "2",
    name: "JEI (Just Enough Items)",
    description: "Просмотр рецептов и предметов в игре",
    version: "15.2.0",
    author: "mezz",
    enabled: true,
    size: "2.8 MB",
    installed: true,
  },
  {
    id: "3",
    name: "Twilight Forest",
    description: "Новое измерение с уникальными биомами и боссами",
    version: "4.3.1",
    author: "Benimatic",
    enabled: false,
    size: "58.4 MB",
    installed: true,
  },
  {
    id: "4",
    name: "Create",
    description: "Механизмы и автоматизация в стиле стимпанк",
    version: "0.5.1",
    author: "simibubi",
    enabled: false,
    size: "21.3 MB",
    installed: false,
  },
  {
    id: "5",
    name: "Biomes O' Plenty",
    description: "Добавляет более 90 новых биомов",
    version: "18.0.0",
    author: "Forstride",
    enabled: false,
    size: "15.7 MB",
    installed: false,
  },
];

export function Mods() {
  const navigate = useNavigate();
  const [mods, setMods] = useState(initialMods);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMod = (id: string) => {
    setMods(mods.map(mod => 
      mod.id === id ? { ...mod, enabled: !mod.enabled } : mod
    ));
  };

  const installMod = (id: string) => {
    setMods(mods.map(mod => 
      mod.id === id ? { ...mod, installed: true, enabled: true } : mod
    ));
  };

  const filteredMods = mods.filter(mod => 
    mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mod.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Список модов</h1>
          
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск модов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary/50 border-border"
            />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="grid gap-4 pr-4">
            {filteredMods.map((mod) => (
              <div
                key={mod.id}
                className="backdrop-blur-md bg-card/50 rounded-lg p-6 border border-border 
                         hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Package className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{mod.name}</h3>
                      <span className="text-sm text-muted-foreground">v{mod.version}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">{mod.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Автор: {mod.author}</span>
                      <span>Размер: {mod.size}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {mod.installed ? (
                      <>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm text-primary">Установлен</span>
                        </div>
                        <Switch
                          checked={mod.enabled}
                          onCheckedChange={() => toggleMod(mod.id)}
                        />
                      </>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => installMod(mod.id)}
                        className="bg-gradient-primary hover:shadow-glow"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Установить
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Активно модов: {mods.filter(m => m.enabled).length} из {mods.filter(m => m.installed).length}
          </p>
          <Button
            variant="secondary"
            onClick={() => navigate("/")}
          >
            Готово
          </Button>
        </div>
      </div>
    </div>
  );
}