import { Message } from "@/app/page";

type SidebarProps = {
  chatHistory: Message[][];
  onNewChat: () => void;
};

export default function Sidebar({ chatHistory, onNewChat }: SidebarProps) {
  return (
    <div className="bg-black text-white w-64 p-2 flex flex-col">
      <button
        className="mb-4 p-2 border border-gray-600 text-white rounded-lg hover:bg-gray-800 text-left"
        onClick={onNewChat}
      >
        + New Chat
      </button>
      <div className="flex-1 overflow-y-auto">
        {chatHistory.map((chat, index) => (
          <div key={index} className="p-2 mb-1 text-sm text-gray-300 rounded-lg cursor-pointer hover:bg-gray-800">
            {chat[0]?.content.substring(0, 30)}...
          </div>
        ))}
      </div>
    </div>
  );
}
