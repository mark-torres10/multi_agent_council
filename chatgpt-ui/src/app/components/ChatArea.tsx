import ChatInput from "./ChatInput";
import Conversation from "./Conversation";
import { Message } from "@/app/page";

type ChatAreaProps = {
  messages: Message[];
  onSendMessage: (input: string) => void;
};

export default function ChatArea({ messages, onSendMessage }: ChatAreaProps) {
  return (
    <div className="flex-1 flex flex-col bg-gray-900">
      <Conversation messages={messages} />
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
}
