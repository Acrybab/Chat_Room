import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useHomePage } from "@/hooks/useHomePage";
import { ChatRoomList } from "@/features/Chat/ChatRoomList";
import { HeaderSection } from "@/components/ui/HomePage/HeaderSection";
import { StatsCards } from "@/components/ui/HomePage/StatsCards";
import { Footer } from "@/components/ui/HomePage/Footer";

export const Home = () => {
  const { handleJoinRoom, handleCreateRoom, getCategoryVariant } =
    useHomePage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <HeaderSection />
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Available Rooms</h2>
            <p className="text-muted-foreground">
              Choose a room to start chatting
            </p>
          </div>
          <Button onClick={handleCreateRoom} size="lg" className="gap-2">
            <Plus className="w-4 h-4" />
            Create Room
          </Button>
        </div>
        <ChatRoomList
          getCategoryVariant={getCategoryVariant}
          handleJoinRoom={handleJoinRoom}
        />
        <StatsCards />
        <Footer
          handleCreateRoom={handleCreateRoom}
          handleJoinRoom={handleJoinRoom}
        />
      </div>
    </div>
  );
};
