import { LauncherHeader } from "@/components/LauncherHeader";
import { NewsPanel } from "@/components/NewsPanel";
import { SocialLinks } from "@/components/SocialLinks";
import { Home } from "./Home";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col">
      {/* Header */}
      <LauncherHeader />
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Main Area */}
        <div className="flex-1">
          <Home />
        </div>
        
        {/* News Panel */}
        <div className="w-96">
          <NewsPanel />
        </div>
      </div>
      
      {/* Footer */}
      <SocialLinks />
    </div>
  );
};

export default Index;