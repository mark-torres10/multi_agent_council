type MessageProps = {
  role: "user" | "assistant";
  content: string;
};

const roleStyles = {
  user: {
    container: "justify-end",
    bubble: "bg-blue-500 text-white",
    avatar: "bg-blue-500",
    avatarText: "U",
  },
  assistant: {
    container: "justify-start",
    bubble: "bg-gray-700 text-white",
    avatar: "bg-green-500",
    avatarText: "A",
  },
};

export default function Message({ role, content }: MessageProps) {
  const styles = roleStyles[role];

  return (
    <div className={`flex items-start gap-3 my-4 ${styles.container}`}>
      {role === 'assistant' && (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${styles.avatar}`}>
          {styles.avatarText}
        </div>
      )}
      <div className={`max-w-2xl p-3 rounded-lg ${styles.bubble}`}>
        {content}
      </div>
      {role === 'user' && (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${styles.avatar}`}>
          {styles.avatarText}
        </div>
      )}
    </div>
  );
}
