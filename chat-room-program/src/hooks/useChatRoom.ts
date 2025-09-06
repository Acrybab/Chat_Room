import type { Message } from "@/store/room.store";
import { useEffect, useRef } from "react";

interface UseChatRoomProps {
  roomId: string | undefined;
  message: string;
  setMessage: (message: string) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

export const useChatRoom = ({
  roomId,
  message,
  setMessage,
  messages,
  setMessages,
}: UseChatRoomProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle send message
  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      user: "You",
      userId: "current_user",
      avatar: "sss",
      message: message.trim(),
      timestamp: new Date().toISOString(),
      isOwn: true,
      type: "text" as string,
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Focus back to input
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  // Handle key press
  const handleKeyPress = (e: {
    key: string;
    shiftKey: boolean;
    preventDefault: () => void;
  }) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Get room name based on ID
  const getRoomName = () => {
    const roomNames = {
      "1": "General Discussion",
      "2": "Tech Talk",
      "3": "Random Chat",
    };
    return (
      roomNames[roomId as keyof typeof roomNames] || `Room ${roomId ?? ""}`
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-500";
      case "away":
        return "text-yellow-500";
      case "offline":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };

  // Format timestamp
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  return {
    messagesEndRef,
    inputRef,
    handleSendMessage,
    handleKeyPress,
    getRoomName,
    getStatusColor,
    formatTimestamp,
    getInitials,
  };
};
