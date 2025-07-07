"use client";

import { useState, FormEvent } from "react";

type ChatInputProps = {
  onSendMessage: (input: string) => void;
};

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-700">
      <div className="flex items-center bg-gray-800 rounded-lg p-2">
        <textarea
          className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none"
          placeholder="Send a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={1}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-500"
          disabled={!input.trim()}
        >
          Send
        </button>
      </div>
    </form>
  );
}
