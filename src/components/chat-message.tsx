"use client";

import { cn } from "@/lib/utils";
import { Message as MessageType } from "ai";
import { Bot, User } from "lucide-react";

export default function ChatMessage({ message }: { message: MessageType }) {
  const { role, content } = message;
  const isAssistant = role === "assistant";

  return (
    <div
      className={cn(
        `flex flex-col gap-2 border-b border-dashed border-gray-300 pb-2 px-4`,
        isAssistant ? "items-start" : "items-end"
      )}
    >
      <div className="flex items-center gap-2">
        {isAssistant ? <Bot /> : <User />}
        <p>{isAssistant ? "Exp Inc. Assistant :" : "You :"}</p>
      </div>
      {content}
    </div>
  );
}
