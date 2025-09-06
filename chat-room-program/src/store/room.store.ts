import { create } from "zustand";

export type Message = {
  id: number;
  user: string;
  userId: string;
  avatar: string;
  message: string;
  timestamp: string;
  isOwn: boolean;
  type: string;
};

export type OnlineUser = {
  id: string;
  name: string;
  status: string;
  avatar: string;
  role: string;
};

type RoomState = {
  message: string;
  setMessage: (message: string) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  onlineUsers: OnlineUser[];
  setOnlineUsers: (users: OnlineUser[]) => void;
  isTyping: boolean;
  setIsTyping: (isTyping: boolean) => void;
};

export const useRoomStore = create<RoomState>((set) => ({
  message: "",
  setMessage: (message: string) => set({ message }),
  messages: [
    {
      id: 1,
      user: "Alice Johnson",
      userId: "alice123",
      avatar: "sss",
      message: "Hey everyone! Welcome to the Tech Talk room 👋",
      timestamp: new Date(Date.now() - 300000).toISOString(),
      isOwn: false,
      type: "text",
    },
    {
      id: 2,
      user: "You",
      userId: "current_user",
      avatar: "sss",
      message:
        "Thanks! Excited to be here. What's the latest topic we're discussing?",
      timestamp: new Date(Date.now() - 240000).toISOString(),
      isOwn: true,
      type: "text",
    },
    {
      id: 3,
      user: "Bob Smith",
      userId: "bob456",
      avatar: "aaa",
      message:
        "We were just talking about the new AI developments. Have you seen the latest updates?",
      timestamp: new Date(Date.now() - 180000).toISOString(),
      isOwn: false,
      type: "text",
    },
    {
      id: 4,
      user: "Carol Wilson",
      userId: "carol789",
      avatar: "aaa",
      message:
        "I think it's fascinating how quickly the technology is evolving. The possibilities seem endless! What do you think about the impact on software development?",
      timestamp: new Date(Date.now() - 120000).toISOString(),
      isOwn: false,
      type: "text",
    },
    {
      id: 5,
      user: "You",
      userId: "current_user",
      avatar: "sss",
      message:
        "Absolutely! I'm particularly interested in how it's changing the development workflow.",
      timestamp: new Date(Date.now() - 60000).toISOString(),
      isOwn: true,
      type: "text",
    },
  ],
  setMessages: (messages: Message[]) => set({ messages }),
  onlineUsers: [
    {
      id: "alice123",
      name: "Alice Johnson",
      status: "online",
      avatar: "sss",
      role: "moderator",
    },
    {
      id: "bob456",
      name: "Bob Smith",
      status: "online",
      avatar: "aaa",
      role: "member",
    },
    {
      id: "carol789",
      name: "Carol Wilson",
      status: "away",
      avatar: "aaa",
      role: "member",
    },
    {
      id: "david101",
      name: "David Brown",
      status: "online",
      avatar: "aaa",
      role: "member",
    },
    {
      id: "emma202",
      name: "Emma Davis",
      status: "offline",
      avatar: "aaa",
      role: "member",
    },
    {
      id: "current_user",
      name: "You",
      status: "online",
      avatar: "sss",
      role: "member",
    },
  ],
  setOnlineUsers: (users: OnlineUser[]) => set({ onlineUsers: users }),
  isTyping: false,
  setIsTyping: (isTyping: boolean) => set({ isTyping }),
}));
