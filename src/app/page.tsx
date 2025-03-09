import ChatContainer from "@/components/chat-container";
import ClickSpark from "@/components/ui/ClickSpark/ClickSpark";

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#000"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <main className="w-full h-screen relative">
        <ChatContainer />
      </main>
    </ClickSpark>
  );
}
