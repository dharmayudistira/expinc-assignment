"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useChat } from "@ai-sdk/react";
import ChatMessage from "./chat-message";
import Footer from "./footer";
import { useEffect, useRef, useState } from "react";
import Orb from "./ui/Orb/Orb";
import Header from "./header";
import { Modal, ModalBody, ModalContent } from "./ui/animated-modal";
import { createClient } from "@/config/client";

const CHAT_PLACEHOLDERS = [
  "Help me find the best sneakers for running...",
  "Suggest a budget-friendly smartphone with a great camera...",
  "Recommend a travel package for a solo trip to Japan...",
];

export default function ChatContainer() {
  const supabase = createClient();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, handleInputChange, handleSubmit, setMessages } = useChat({
    onFinish: (message) => {
      const content = message.content?.toString() || "";

      saveMessageToSupabase(content);
      if (content.includes("Tadaa!") || content.includes("Finally!")) {
        setFinalMessage(content);
        setOpenModal(true);
      }
    },
  });

  const [finalMessage, setFinalMessage] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const saveMessageToSupabase = async (answer: string) => {
    await supabase.from("chats").insert({ answer });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="w-full h-full flex flex-col items-center overflow-hidden">
        <Header />

        <div className="container py-8 w-full max-w-6xl h-full flex flex-col gap-8 border-x border-dashed border-gray-300 overflow-hidden">
          {/* Chat History */}
          {messages.length > 0 ? (
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
              </div>
              <div ref={messagesEndRef} />
            </div>
          ) : (
            // Empty state
            <div className="flex-1 w-full relative flex items-center justify-center">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />

              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-bold -z-10">
                Ask me.
              </p>
            </div>
          )}

          {/* Chat Input */}
          <div className="w-full px-4 flex-shrink-0">
            <PlaceholdersAndVanishInput
              placeholders={CHAT_PLACEHOLDERS}
              onChange={handleInputChange}
              onSubmit={handleSubmit}
              disabled={finalMessage !== null}
            />
          </div>
        </div>

        <Footer />
      </div>

      <Modal
        open={openModal}
        setOpen={() => {
          setOpenModal(false);
          setMessages([]);
          setFinalMessage(null);
        }}
      >
        <ModalBody className="w-full flex items-center justify-center p-4">
          <ModalContent className="flex flex-col w-3/4 h-full items-center justify-between">
            <p className="text-2xl font-bold">Thanks for asking!</p>
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="text-center">{finalMessage}</p>
            </div>
            <p className="text-sm text-gray-500">Exp Inc.</p>
          </ModalContent>
        </ModalBody>
      </Modal>
    </>
  );
}
