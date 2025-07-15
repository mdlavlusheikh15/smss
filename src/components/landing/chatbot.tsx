"use client";

import { useState, useRef, useEffect } from "react";
import { faqChatbot } from "@/ai/flows/faq-chatbot";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, Send, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await faqChatbot({ query: input });
      const assistantMessage: Message = { role: "assistant", content: result.answer };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: "assistant",
        content: t('chatbot.error'),
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Chatbot error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const presetQuestions = [
    t('chatbot.preset1'),
    t('chatbot.preset2'),
    t('chatbot.preset3'),
  ];

  const handlePresetQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-2xl text-primary">{t('chatbot.title')}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={20} /></AvatarFallback>
              </Avatar>
              <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p className="text-sm">{t('chatbot.welcome')}</p>
              </div>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8">
                     <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={20} /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted rounded-tl-none"
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                 {message.role === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><User size={20} /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
             {isLoading && (
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                   <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={20} /></AvatarFallback>
                </Avatar>
                <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                  <div className="flex items-center space-x-1">
                    <span className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>
            )}
            {messages.length === 0 && !isLoading && (
                 <div className="space-y-2 pt-4">
                    {presetQuestions.map(q => (
                         <Button key={q} variant="outline" size="sm" className="w-full text-left justify-start" onClick={() => handlePresetQuestion(q)}>{q}</Button>
                    ))}
                 </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chatbot.placeholder')}
            disabled={isLoading}
            autoComplete="off"
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
