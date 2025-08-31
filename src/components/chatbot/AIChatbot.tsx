import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios"; // ✅ Add axios for API calls

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatStep {
  id: number;
  botMessage: string;
  expectedResponse?: string[];
  nextStep?: number | ((response: string) => number);
  action?: "contact" | "services" | "talent";
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [userResponses, setUserResponses] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ✅ HubSpot Form Submission Function
  async function sendToHubSpot(name: string, phone: string, responses: string[]) {
    try {
      await axios.post(
        "https://api-na2.hsforms.com/submissions/v3/integration/submit/242475813/8f7b9f7e-2c73-44d2-a921-4815ce91776b",
        {
          fields: [
            { name: "firstname", value: name || "Visitor" },
            { name: "phone", value: phone },
            { name: "chatbot_response", value: responses.join(" | ") }
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }
      );
      console.log("✅ Data sent to HubSpot successfully!");
    } catch (error: any) {
      console.error("❌ HubSpot submission error:", error.response?.data || error);
    }
  }

  const chatFlow: ChatStep[] = [
    {
      id: 0,
      botMessage: "👋 Hi there! I'm your AI assistant from The Virtual Masters. How can I help you today?\n\n1. Learn about our services\n2. Apply as talent\n3. Get a quote for my project\n4. Speak to a human",
    },
    {
      id: 1,
      botMessage: "Great! What type of business are you running? This helps me suggest the best services for you.\n\n1. Startup/Small Business\n2. Marketing Agency\n3. E-commerce Store\n4. Consulting/Coaching\n5. Other",
    },
    {
      id: 2,
      botMessage: "Perfect! What's your biggest challenge right now?\n\n1. Too much admin work\n2. Need help with marketing\n3. Website/tech issues\n4. Customer support\n5. Need more leads",
    },
    {
      id: 3,
      botMessage: "I understand! How many hours per week are you spending on tasks that could be delegated?\n\n1. Less than 10 hours\n2. 10-20 hours\n3. 20-40 hours\n4. More than 40 hours",
    },
    {
      id: 4,
      botMessage: "That's a lot of time you could get back! What's your monthly budget for getting help?\n\n1. Under ₹25,000\n2. ₹25,000 - ₹50,000\n3. ₹50,000 - ₹1,00,000\n4. ₹1,00,000+",
    },
    {
      id: 5,
      botMessage: "Excellent! Based on your needs, I can see how we can help you save time and grow your business. When would be the best time for our team to call you?\n\n1. Today\n2. Tomorrow\n3. This week\n4. Next week",
    },
    {
      id: 6,
      botMessage: "Perfect! Our team will reach out to you soon. Can you please share your contact number so we can call you?",
      action: "contact"
    },
    // Talent application flow
    {
      id: 10,
      botMessage: "Wonderful! We're always looking for talented individuals. What's your area of expertise?\n\n1. Virtual Assistant\n2. Web Development\n3. Digital Marketing\n4. Design & Creative\n5. Customer Support\n6. Other",
    },
    {
      id: 11,
      botMessage: "Great choice! How much experience do you have in this field?\n\n1. I'm just starting out\n2. 1-3 years\n3. 3-5 years\n4. 5+ years",
    },
    {
      id: 12,
      botMessage: "Perfect! Are you looking for:\n\n1. Full-time remote work\n2. Part-time opportunities\n3. Freelance projects\n4. Flexible schedule",
    },
    {
      id: 13,
      botMessage: "Excellent! Our talent acquisition team would love to speak with you about opportunities. Please share your contact number and we'll call you within 24 hours.",
      action: "contact"
    },
    // Direct contact flow
    {
      id: 20,
      botMessage: "I'll connect you with our team right away! Please share your contact number and someone will call you within the next hour.",
      action: "contact"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      addBotMessage(chatFlow[0].botMessage);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isBot: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleResponse = (response: string) => {
    addUserMessage(response);
    setUserResponses(prev => [...prev, response]);
    setInputValue("");

    // Determine next step based on current step and response
    setTimeout(() => {
      let nextStepId = currentStep + 1;

      // Route based on first response
      if (currentStep === 0) {
        if (response.includes("1") || response.toLowerCase().includes("service")) {
          nextStepId = 1;
        } else if (response.includes("2") || response.toLowerCase().includes("talent") || response.toLowerCase().includes("apply")) {
          nextStepId = 10;
        } else if (response.includes("3") || response.toLowerCase().includes("quote") || response.toLowerCase().includes("project")) {
          nextStepId = 1; // Go to services flow for quote
        } else if (response.includes("4") || response.toLowerCase().includes("human") || response.toLowerCase().includes("speak")) {
          nextStepId = 20;
        }
      }

      const nextStep = chatFlow.find(step => step.id === nextStepId);
      if (nextStep) {
        setCurrentStep(nextStepId);
        addBotMessage(nextStep.botMessage);

        // ✅ Handle special actions (send data to HubSpot)
        if (nextStep.action === "contact") {
          const phone = response; // last input is phone number
          const name = userResponses[0] || "Visitor"; // first answer could be name if you add that step
          sendToHubSpot(name, phone, [...userResponses, response]);
        }
      } else {
        // End of conversation
        addBotMessage("Thank you for chatting with me! Our team will be in touch soon. Have a great day! 🚀");
      }
    }, 1000);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      handleResponse(inputValue.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleQuickResponse = (response: string) => {
    handleResponse(response);
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep(0);
    setUserResponses([]);
    setInputValue("");
    addBotMessage(chatFlow[0].botMessage);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-pulse-glow"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-96 h-[500px] max-h-[80vh] animate-slide-up sm:bottom-6 sm:right-6 max-w-[calc(100vw-2rem)] sm:max-w-96">
          <Card className="h-full bg-gradient-card border-border shadow-ai-glow flex flex-col">
            <CardHeader className="bg-gradient-primary text-white p-4 rounded-t-lg flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <CardTitle className="text-lg">AI Assistant</CardTitle>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetChat}
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    ↻
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex-1 flex flex-col min-h-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.isBot ? "justify-start" : "justify-end"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg p-3 text-sm",
                        message.isBot
                          ? "bg-muted text-foreground"
                          : "bg-primary text-primary-foreground"
                      )}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <div className="whitespace-pre-wrap">{message.text}</div>
                        {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-border flex-shrink-0">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button onClick={handleSend} size="sm" variant="hero">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Responses */}
                {currentStep === 0 && (
                  <div className="mt-3 space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start"
                      onClick={() => handleQuickResponse("1. Learn about services")}
                    >
                      🔧 Learn about services
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start"
                      onClick={() => handleQuickResponse("2. Apply as talent")}
                    >
                      💼 Apply as talent
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start"
                      onClick={() => handleQuickResponse("3. Get a quote")}
                    >
                      💰 Get a quote
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
