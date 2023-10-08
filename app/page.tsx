import Chat from "@/components/chat";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Popover>
        <PopoverContent align="start" className="w-[440px] mr-4">
          <Chat
            endpoint="api/chat/retrieval"
            showIngestForm={true}
            placeholder={"질문을 해주세요!"}
            emoji="🤖"
            titleText="Document Retrieval Agent"
          ></Chat>
        </PopoverContent>
        <PopoverTrigger asChild className="fixed bottom-4 right-4">
          <Button
            variant="outline"
            className="w-16 h-16 bg-black rounded-full aspect-square hover:bg-gray-700"
          >
            <MessageCircle size={40} className="text-white" />
          </Button>
        </PopoverTrigger>
      </Popover>
    </div>
  );
}
