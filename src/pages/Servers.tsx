import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Server, Users, Globe, Search, Signal, SignalLow, SignalZero } from "lucide-react";

interface ServerInfo {
  id: string;
  name: string;
  description: string;
  ip: string;
  players: number;
  maxPlayers: number;
  ping: number;
  version: string;
  type: string;
}

const servers: ServerInfo[] = [
  {
    id: "1",
    name: "Survival Classic",
    description: "Классическое выживание с элементами RPG",
    ip: "mc.server1.com",
    players: 127,
    maxPlayers: 200,
    ping: 32,
    version: "1.20.1",
    type: "Survival",
  },
  {
    id: "2",
    name: "SkyBlock Paradise",
    description: "Уникальный SkyBlock с кастомными островами",
    ip: "play.skyblock.net",
    players: 89,
    maxPlayers: 150,
    ping: 45,
    version: "1.20.1",
    type: "SkyBlock",
  },
  {
    id: "3",
    name: "PvP Arena",
    description: "Хардкорные PvP битвы и турниры",
    ip: "pvp.battles.com",
    players: 256,
    maxPlayers: 300,
    ping: 28,
    version: "1.20.1",
    type: "PvP",
  },
  {
    id: "4",
    name: "Creative World",
    description: "Безграничное творчество и строительство",
    ip: "creative.build.ru",
    players: 45,
    maxPlayers: 100,
    ping: 156,
    version: "1.20.1",
    type: "Creative",
  },
  {
    id: "5",
    name: "Anarchy Realm",
    description: "Полная анархия, без правил и ограничений",
    ip: "anarchy.chaos.net",
    players: 178,
    maxPlayers: 500,
    ping: 67,
    version: "1.20.1",
    type: "Anarchy",
  },
];

export function Servers() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServer, setSelectedServer] = useState<string | null>(null);

  const filteredServers = servers.filter(server => 
    server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    server.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPingIcon = (ping: number) => {
    if (ping < 50) return <Signal className="h-4 w-4 text-primary" />;
    if (ping < 100) return <SignalLow className="h-4 w-4 text-yellow-500" />;
    return <SignalZero className="h-4 w-4 text-destructive" />;
  };

  const getPingColor = (ping: number) => {
    if (ping < 50) return "text-primary";
    if (ping < 100) return "text-yellow-500";
    return "text-destructive";
  };

  const handleConnect = (serverId: string) => {
    setSelectedServer(serverId);
    // Server connection logic here
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

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
          <h1 className="text-3xl font-bold text-foreground">Список серверов</h1>
          
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск серверов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary/50 border-border"
            />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="grid gap-4 pr-4">
            {filteredServers.map((server) => (
              <div
                key={server.id}
                className={`backdrop-blur-md bg-card/50 rounded-lg p-6 border transition-all duration-300
                         ${selectedServer === server.id 
                           ? 'border-primary shadow-glow' 
                           : 'border-border hover:border-primary/30'}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Server className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{server.name}</h3>
                      <span className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground">
                        {server.type}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">{server.description}</p>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{server.ip}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className={server.players > 0 ? "text-primary font-semibold" : "text-muted-foreground"}>
                          {server.players}/{server.maxPlayers}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {getPingIcon(server.ping)}
                        <span className={getPingColor(server.ping)}>
                          {server.ping}ms
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleConnect(server.id)}
                    disabled={selectedServer === server.id}
                    className="bg-gradient-primary hover:shadow-glow disabled:opacity-50"
                  >
                    {selectedServer === server.id ? "Подключение..." : "Подключиться"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Всего игроков онлайн: {servers.reduce((sum, s) => sum + s.players, 0)}
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