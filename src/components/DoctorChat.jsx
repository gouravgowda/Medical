import { useState, useEffect, useRef } from "react";
import { X, Mic, Send, Phone, Video, MoreHorizontal, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DoctorChat = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hello! I'm Dr. Sarah Mitchell, your AI Health Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Mock AI response
        setTimeout(() => {
            const responses = [
                "Based on the clinical guidelines, those symptoms could be related to several conditions. Have you checked the Sepsis Protocol?",
                "That's an interesting case. For Hypertension management, we typically look at initial assessment before prescribing first-line therapy.",
                "I've searched the library for recent trials on that medication. The latest evidence suggests a positive outcome for most patient groups."
            ];
            const assistantMsg = {
                role: "assistant",
                content: responses[Math.floor(Math.random() * responses.length)]
            };
            setMessages(prev => [...prev, assistantMsg]);
            setIsTyping(false);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-2xl bg-white rounded-3xl shadow-3xl overflow-hidden flex flex-col h-[80vh] border border-white/20"
            >
                {/* Header */}
                <div className="p-4 border-b border-border/50 flex items-center justify-between bg-primary/5">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary bg-secondary">
                                <img
                                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150&h=150"
                                    alt="Dr. Sarah Mitchell"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-lg leading-tight">Dr. Sarah Mitchell</h3>
                            <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                                AI Health Assistant • <span className="text-green-600">Online</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-secondary rounded-xl transition-colors text-muted-foreground">
                            <Phone className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-secondary rounded-xl transition-colors text-muted-foreground">
                            <Video className="w-5 h-5" />
                        </button>
                        <button onClick={onClose} className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-xl transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Message area */}
                <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50"
                >
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`flex gap-3 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${msg.role === "user" ? "bg-white border-border" : "bg-primary border-primary text-white"}`}>
                                    {msg.role === "user" ? <User className="w-4 h-4" /> : <Stethoscope className="w-4 h-4" />}
                                </div>
                                <div className={`px-4 py-3 rounded-2xl text-sm shadow-sm ${msg.role === "user"
                                        ? "bg-primary text-white rounded-tr-none"
                                        : "bg-white text-foreground border border-border/50 rounded-tl-none"
                                    }`}>
                                    {msg.content}
                                </div>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-border/50 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border/50 bg-white">
                    <div className="relative flex items-center gap-2">
                        <button className="absolute left-3 text-muted-foreground hover:text-primary transition-colors">
                            <Mic className="w-5 h-5" />
                        </button>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Ask a clinical question..."
                            className="w-full bg-secondary/50 border border-border/50 rounded-2xl py-3 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            className="absolute right-3 w-8 h-8 bg-primary text-white rounded-xl flex items-center justify-center hover:opacity-90 disabled:opacity-50 transition-all active:scale-95"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-[10px] text-center text-muted-foreground mt-3 uppercase tracking-widest font-bold opacity-60">
                        Internal AI Assistant • Not for actual medical diagnosis
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const Stethoscope = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2a.3.3 0 0 0-.2.3Z" /><path d="M10 22v-2" /><path d="M7 18H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-2" /><path d="M9 14h6" /><path d="M12 10v4" /><path d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
);

export default DoctorChat;
