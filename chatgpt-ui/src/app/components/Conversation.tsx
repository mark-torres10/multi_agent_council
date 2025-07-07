import Message from "./Message";

type ConversationProps = {
  messages: { role: "user" | "assistant"; content: string }[];
};

export default function Conversation({ messages }: ConversationProps) {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.map((msg, index) => (
        <Message key={index} role={msg.role} content={msg.content} />
      ))}
    </div>
  );
}
