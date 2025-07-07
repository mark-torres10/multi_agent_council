"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import ChatArea from "@/app/components/ChatArea";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleNewMessage = (input: string) => {
    const userMessage: Message = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Stubbed AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: "This is a stubbed response.",
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 500);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatArea messages={messages} onSendMessage={handleNewMessage} />
    </div>
  );
}
