import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'bot';
  text: string;
}

const initialMessages: Message[] = [
  { id: 1, role: 'bot', text: "Hello! I'm your MedCare health assistant. How can I help you today? You can ask me about symptoms, medications, or general health advice." },
];

const botResponses: Record<string, string> = {
  headache: "Headaches can have many causes including stress, dehydration, or lack of sleep. Try resting in a dark room, staying hydrated, and taking over-the-counter pain relief. If headaches persist for more than a few days, I'd recommend booking an appointment with Dr. Emily Brown (General Physician).",
  fever: "For mild fever (below 102°F/39°C), rest and stay hydrated. You can take acetaminophen or ibuprofen. If fever persists beyond 3 days or exceeds 103°F, please seek immediate medical attention. Would you like me to book an appointment?",
  appointment: "I can help you book an appointment! We have several doctors available. You can visit the Appointments page to browse available doctors and time slots, or tell me which specialty you're looking for.",
  insurance: "Your current plan is HealthGuard Premium (Family Floater) with a $50,000 annual limit. You've used $12,500 so far this year. Visit the Insurance page for detailed coverage information.",
  default: "I understand your concern. For personalized medical advice, I'd recommend consulting with one of our doctors. Would you like me to help you book an appointment, or is there something specific I can help with?",
};

const Consultation = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');

  const getBotResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && lower.includes(key)) return response;
    }
    return botResponses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), role: 'user', text: input.trim() };
    const botMsg: Message = { id: Date.now() + 1, role: 'bot', text: getBotResponse(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-7rem)]">
        <div className="mb-4">
          <h1 className="text-2xl font-display font-bold text-foreground">Health Consultation</h1>
          <p className="text-muted-foreground mt-1">Chat with our AI health assistant</p>
        </div>

        <Card className="flex-1 flex flex-col border border-border shadow-sm overflow-hidden">
          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div className={`max-w-[70%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-md'
                    : 'bg-secondary text-foreground rounded-bl-md'
                }`}>
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Describe your symptoms or ask a question..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground outline-none border border-border focus:border-primary transition-colors"
              />
              <Button onClick={handleSend} size="icon" className="rounded-xl h-10 w-10">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-[11px] text-muted-foreground mt-2 text-center">
              This is an AI assistant. For emergencies, please call 911 or visit the nearest hospital.
            </p>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Consultation;
