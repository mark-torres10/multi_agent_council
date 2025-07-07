import { Message } from "@/app/page";

type SidebarProps = {
  chatHistory: Message[][];
  onNewChat: () => void;
};

export default function Sidebar({ chatHistory, onNewChat }: SidebarProps) {
  return (
    <div className="bg-gray-800 text-white w-64 p-4 flex flex-col">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={onNewChat}
      >
        New Chat
      </button>
      <div className="flex-1 overflow-y-auto">
        {chatHistory.map((chat, index) => (
          <div key={index} className="p-2 mb-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
            {chat[0]?.content.substring(0, 20)}...
          </div>
        ))}
      </div>
    </div>
  );
}
