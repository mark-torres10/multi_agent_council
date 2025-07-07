type MessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function Message({ role, content }: MessageProps) {
  const bgColor = role === "user" ? "bg-blue-500" : "bg-gray-600";
  const align = role === "user" ? "justify-end" : "justify-start";

  return (
    <div className={`flex ${align} mb-4`}>
      <div className={`px-4 py-2 rounded-lg text-white ${bgColor}`}>
        {content}
      </div>
    </div>
  );
}
