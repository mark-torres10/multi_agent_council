"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/app/components/Sidebar";
import ChatArea from "@/app/components/ChatArea";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatHistory, setChatHistory] = useState<Message[][]>([]);

  const handleNewMessage = (input: string) => {
    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    // Stubbed AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: "This is a stubbed response.",
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 500);
  };

  const handleNewChat = () => {
    if (messages.length > 0) {
      setChatHistory([messages, ...chatHistory]);
    }
    setMessages([]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar chatHistory={chatHistory} onNewChat={handleNewChat} />
      <ChatArea messages={messages} onSendMessage={handleNewMessage} />
    </div>
  );
}
