import { useNavigate } from "react-router-dom";

export const useHomePage = () => {
  const navigate = useNavigate();

  const handleJoinRoom = (roomId: number) => {
    console.log(`Joining room ${roomId}`);
    navigate(`/room/${roomId}`);
  };

  const handleCreateRoom = () => {
    console.log("Creating new room");
    // Add create room logic here
  };

  const variants = {
    Public: "default",
    Technology: "secondary",
    Entertainment: "outline",
  } as const;

  type Category = keyof typeof variants;

  const getCategoryVariant = (category: string) => {
    return variants[category as Category] || "default";
  };
  return { handleJoinRoom, handleCreateRoom, getCategoryVariant };
};
