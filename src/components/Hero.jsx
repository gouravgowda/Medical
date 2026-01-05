import { Search, Mic, Upload, Camera, Users, ClipboardList, Clock, CheckCircle } from "lucide-react";

const Hero = ({ onOpenCamera }) => {
    const trending = ["Diabetes Type 2", "Chest Pain Protocol", "Hypertension", "Sepsis Guidelines"];

    return (
        <section className="relative min-h-screen pt-32 pb-20 hero-gradient overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-2000">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-medium text-primary">Trusted by 15,000+ Medical Professionals</span>
                    </div>

                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                        Medical Wisdom at <span className="text-gradient">Your Fingertips</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        Your clinical knowledge hub for evidence-based medicine. Search diseases, medications, and protocols with AI-powered precision.
                    </p>

                    <div className="max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-all duration-500" />
                            <div className="relative flex items-center bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden">
                                <Search className="w-5 h-5 text-muted-foreground ml-5" />
                                <input
                                    type="text"
                                    placeholder="Search diseases, medications, protocols..."
                                    className="flex-1 px-4 py-5 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                                />
                                <div className="flex items-center gap-1 pr-2">
                                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                                        <Mic className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                                        <Upload className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={onOpenCamera}
                                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Camera className="w-5 h-5" />
                                    </button>
                                    <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 ml-2">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                        <span className="text-sm text-muted-foreground py-1.5">Trending:</span>
                        {trending.map((topic) => (
                            <button
                                key={topic}
                                className="px-4 py-1.5 text-sm rounded-full bg-white/50 border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                            >
                                {topic}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        {[
                            { value: "15K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
                            { value: "2,500+", label: "Protocols", icon: <ClipboardList className="w-6 h-6" /> },
                            { value: "40 min", label: "Time Saved/Shift", icon: <Clock className="w-6 h-6" /> },
                            { value: "99.9%", label: "Accuracy Rate", icon: <CheckCircle className="w-6 h-6" /> },
                        ].map((stat, idx) => (
                            <div key={idx} className="glass-card rounded-2xl p-6 card-3d cursor-pointer group hover:bg-white transition-colors">
                                <div className="text-primary mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                                <div className="text-3xl font-display font-bold text-gradient">{stat.value}</div>
                                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
