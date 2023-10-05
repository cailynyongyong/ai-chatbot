import { ChatWindow } from "@/components/ChatWindow";

// export default function Home() {
//   const InfoCard = (
//     <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
//       <h1 className="mb-4 text-3xl md:text-4xl">
//         ▲ Next.js + LangChain.js 🦜🔗
//       </h1>
//       <ul>
//         <li className="text-l">
//           🤝
//           <span className="ml-2">
//             This template showcases a simple chatbot using{" "}
//             <a href="https://js.langchain.com/" target="_blank">
//               LangChain.js
//             </a>{" "}
//             and the Vercel{" "}
//             <a href="https://sdk.vercel.ai/docs" target="_blank">
//               AI SDK
//             </a>{" "}
//             in a{" "}
//             <a href="https://nextjs.org/" target="_blank">
//               Next.js
//             </a>{" "}
//             project.
//           </span>
//         </li>
//         <li className="hidden text-l md:block">
//           💻
//           <span className="ml-2">
//             You can find the prompt and model logic for this use-case in{" "}
//             <code>app/api/chat/route.ts</code>.
//           </span>
//         </li>
//         <li>
//           🏴‍☠️
//           <span className="ml-2">
//             By default, the bot is pretending to be a pirate, but you can change
//             the prompt to whatever you want!
//           </span>
//         </li>
//         <li className="hidden text-l md:block">
//           🎨
//           <span className="ml-2">
//             The main frontend logic is found in <code>app/page.tsx</code>.
//           </span>
//         </li>
//         <li className="text-l">
//           🐙
//           <span className="ml-2">
//             This template is open source - you can see the source code and
//             deploy your own version{" "}
//             <a
//               href="https://github.com/langchain-ai/langchain-nextjs-template"
//               target="_blank"
//             >
//               from the GitHub repo
//             </a>
//             !
//           </span>
//         </li>
//         <li className="text-l">
//           👇
//           <span className="ml-2">
//             Try asking e.g. <code>What is it like to be a pirate?</code> below!
//           </span>
//         </li>
//       </ul>
//     </div>
//   );
//   return (
//     <ChatWindow
//       endpoint="api/chat"
//       emoji="🏴‍☠️"
//       titleText="Patchy the Chatty Pirate"
//       placeholder="I'm an LLM pretending to be a pirate! Ask me about the pirate life!"
//       emptyStateComponent={InfoCard}
//     ></ChatWindow>
//   );
// }
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
            endpoint="api/chat"
            emoji="🏴‍☠️"
            titleText="Patchy the Chatty Pirate"
            placeholder="I'm an LLM pretending to be a pirate! Ask me about the pirate life!"
            // emptyStateComponent={}
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
