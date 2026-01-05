import { Zap, BookOpen, Search, Sparkles } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Rapid Diagnostics",
            description: "AI-powered differential diagnosis algorithms help you identify conditions in seconds.",
            bg: "bg-primary/10"
        },
        {
            icon: <BookOpen className="w-6 h-6 text-accent" />,
            title: "High-Yield Library",
            description: "Curated clinical pearls and treatment protocols from leading medical institutions.",
            bg: "bg-accent/10"
        },
        {
            icon: <Search className="w-6 h-6 text-primary" />,
            title: "Evidence-Based",
            description: "Every recommendation backed by peer-reviewed research and updated clinical guidelines.",
            bg: "bg-primary/10"
        },
        {
            icon: <Sparkles className="w-6 h-6 text-accent" />,
            title: "Smart Suggestions",
            description: "Machine learning adapts to your specialty for personalized recommendations.",
            bg: "bg-accent/10"
        }
    ];

    return (
        <section id="features" className="py-24 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        Built for <span className="text-gradient">Clinical Excellence</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to make informed clinical decisions at the point of care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group glass-card rounded-2xl p-8 card-3d">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.bg}`}>
                                {feature.icon}
                            </div>
                            <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
