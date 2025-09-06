import React from "react";
import { Card, CardContent } from "../card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import { Button } from "../button";
import { Paperclip, Send, Smile } from "lucide-react";
import { Textarea } from "../textarea";

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  handleSendMessage: () => void;
  handleKeyPress: (e: {
    key: string;
    shiftKey: boolean;
    preventDefault: () => void;
  }) => void;
  getRoomName: () => string;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  message,
  setMessage,
  inputRef,
  handleSendMessage,
  handleKeyPress,
  getRoomName,
}) => {
  return (
    <Card className="rounded-none border-l-0 border-r-0 border-b-0">
      <CardContent className="p-4">
        <div className="flex items-end space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Paperclip className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Attach file</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex-1 min-w-0">
            <Textarea
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message ${getRoomName()}...`}
              className="min-h-[40px] max-h-32 resize-none"
              rows={1}
            />
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Smile className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Add emoji</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            size="icon"
            className="shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
