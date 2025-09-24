import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, ChevronRight } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Обновление 1.20.1 - Trails & Tales",
    content: "Новые блоки, мобы и механики уже доступны на наших серверах!",
    date: "Сегодня",
  },
  {
    id: "2",
    title: "Турнир PvP - Регистрация открыта",
    content: "Примите участие в крупнейшем турнире с призовым фондом!",
    date: "Вчера",
  },
  {
    id: "3",
    title: "Новая сборка модов Industrial",
    content: "Технологическая сборка с 50+ модами для любителей автоматизации.",
    date: "3 дня назад",
  },
];

export function NewsPanel() {
  return (
    <div className="h-full backdrop-blur-md bg-card/30 border-l border-border p-6">
      <h2 className="text-xl font-bold mb-6 text-foreground">Новости</h2>
      
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="space-y-4 pr-4">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer rounded-lg bg-secondary/50 backdrop-blur-sm p-4 
                         transition-all duration-300 hover:bg-secondary/70 hover:shadow-md 
                         border border-border hover:border-primary/30"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary 
                                       transition-all group-hover:translate-x-1" />
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                {item.content}
              </p>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}