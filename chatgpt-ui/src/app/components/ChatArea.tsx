import ChatInput from "./ChatInput";

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4">Chat Area</div>
      <ChatInput />
    </div>
  );
}
