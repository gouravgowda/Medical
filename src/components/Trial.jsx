import { Rocket, Play } from "lucide-react";

const Trial = ({ onOpenChat }) => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12 md:p-16 border-2 border-primary/20 shadow-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-bounce-subtle">
                        <Rocket className="w-4 h-4 text-accent" />
                        <span className="text-sm font-bold text-accent">Save 40+ Minutes Every Shift</span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Start Your <span className="text-gradient">Clinical Trial</span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                        Join thousands of healthcare providers who trust MedInfo for critical clinical decisions. Accurate, fast, and evidence-based.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onOpenChat}
                            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:opacity-90 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            Get Started Free
                        </button>
                        <button className="bg-white text-foreground border border-border px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all flex items-center justify-center gap-2">
                            <Play className="w-5 h-5" />
                            View Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trial;
