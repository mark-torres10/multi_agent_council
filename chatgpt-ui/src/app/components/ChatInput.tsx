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
    <div className="p-4 bg-gray-900 w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center bg-gray-800 rounded-lg p-2 shadow-lg">
        <textarea
          className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none"
          placeholder="Send a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={1}
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-gray-700 rounded-lg hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed"
          disabled={!input.trim()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
}
