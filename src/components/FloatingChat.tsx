import React, { useEffect, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import OlamaChat from "@/OlamaChat";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-floating-chat", handler as EventListener);
    return () => window.removeEventListener("open-floating-chat", handler as EventListener);
  }, []);

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-80">
          <div className="bg-white rounded-lg shadow-lg border p-2">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                <span className="font-medium">Assistant</span>
              </div>
              <button onClick={() => setOpen(false)} className="p-1" aria-label="Close chat">
                <X className="h-5 w-5" />
              </button>
            </div>
            <OlamaChat />
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    </>
  );
}
