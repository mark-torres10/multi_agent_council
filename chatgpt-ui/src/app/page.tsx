import Sidebar from "@/app/components/Sidebar";
import ChatArea from "@/app/components/ChatArea";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatArea />
    </div>
  );
}
