import React from "react";
import { ScrollArea } from "../scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Label } from "../label";
import { Card, CardContent } from "../card";
import type { Message } from "@/store/room.store";

interface MessageAreaProps {
  messages: Message[];
  formatTimestamp: (timestamp: string) => string;
  getInitials: (name: string) => string;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  isTyping: boolean;
}

export const MessageArea = ({
  messages,
  formatTimestamp,
  getInitials,
  messagesEndRef,
  isTyping,
}: MessageAreaProps) => {
  return (
    <ScrollArea className="flex-1 px-4 py-2">
      <div className="space-y-4 pb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${
              msg.isOwn ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            {!msg.isOwn && (
              <Avatar className="h-8 w-8 mt-1">
                <AvatarImage src={msg.avatar} />
                <AvatarFallback className="text-xs">
                  {getInitials(msg.user)}
                </AvatarFallback>
              </Avatar>
            )}

            {/* Message Content */}
            <div
              className={`flex flex-col space-y-1 max-w-[70%] ${
                msg.isOwn ? "items-end" : "items-start"
              }`}
            >
              {/* Sender info for other users */}
              {!msg.isOwn && (
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-semibold">{msg.user}</Label>
                  <span className="text-xs text-muted-foreground">
                    {formatTimestamp(msg.timestamp)}
                  </span>
                </div>
              )}

              {/* Message bubble */}
              <Card
                className={`${
                  msg.isOwn
                    ? "bg-primary text-primary-foreground ml-12"
                    : "bg-muted mr-12"
                }`}
              >
                <CardContent className="px-3 py-2">
                  <p className="text-sm whitespace-pre-wrap break-words">
                    {msg.message}
                  </p>
                  {msg.isOwn && (
                    <p className="text-xs opacity-70 mt-1 text-right">
                      {formatTimestamp(msg.timestamp)}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">...</AvatarFallback>
            </Avatar>
            <Card className="bg-muted max-w-[200px]">
              <CardContent className="px-3 py-2">
                <p className="text-sm text-muted-foreground">
                  Someone is typing...
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};
