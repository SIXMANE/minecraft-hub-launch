import { Globe, MessageCircle, Github, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Globe, label: "Сайт", href: "#", color: "hover:text-primary" },
  { icon: MessageCircle, label: "Telegram", href: "#", color: "hover:text-[#0088cc]" },
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-foreground" },
  { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-[#ff0000]" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4 p-4 backdrop-blur-md bg-card/30 border-t border-border">
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:bg-secondary/50 transition-all"
          onClick={() => window.open(link.href, "_blank")}
        >
          <link.icon className={`w-4 h-4 mr-2 ${link.color}`} />
          <span className="text-sm">{link.label}</span>
        </Button>
      ))}
    </div>
  );
}