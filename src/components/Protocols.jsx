import { ChevronRight, ArrowRight } from "lucide-react";

const Protocols = () => {
    const protocols = [
        {
            title: "Hypertension Management",
            category: "Cardiology",
            color: "text-primary",
            bg: "bg-primary/10",
            steps: ["Initial Assessment", "Lifestyle Mods", "First-Line Therapy", "Monitoring"]
        },
        {
            title: "Sepsis Protocol",
            category: "Critical Care",
            color: "text-destructive",
            bg: "bg-destructive/10",
            steps: ["Hour-1 Bundle", "Fluid Resuscitation", "Vasopressors", "Source Control"]
        },
        {
            title: "DKA Treatment",
            category: "Endocrinology",
            color: "text-accent",
            bg: "bg-accent/10",
            steps: ["Fluid Replacement", "Insulin Therapy", "Electrolytes", "Monitoring"]
        }
    ];

    return (
        <section id="protocols" className="py-24 relative bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Interactive <span className="text-gradient">Treatment Algorithms</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Step-by-step clinical pathways that guide you through complex medical decisions with confidence.
                        </p>
                        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:opacity-90 flex items-center gap-2">
                            Explore All Protocols
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="lg:w-1/2 w-full space-y-4">
                        {protocols.map((protocol, idx) => (
                            <div key={idx} className="glass-card rounded-2xl p-6 card-3d cursor-pointer group hover:border-primary/30">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${protocol.bg} ${protocol.color} uppercase`}>
                                            {protocol.category}
                                        </span>
                                        <h3 className="font-display text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                                            {protocol.title}
                                        </h3>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {protocol.steps.map((step, sIdx) => (
                                        <div key={sIdx} className="flex items-center gap-2">
                                            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center">
                                                {sIdx + 1}
                                            </span>
                                            <span className="text-sm text-muted-foreground">{step}</span>
                                            {sIdx < protocol.steps.length - 1 && (
                                                <span className="w-1 h-1 rounded-full bg-border" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Protocols;
