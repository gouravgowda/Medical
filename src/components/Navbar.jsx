import { Stethoscope, User, LogOut } from "lucide-react";

const Navbar = ({ user, onLogout, onOpenChat }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b bg-white/70">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-glow-pulse">
                        <Stethoscope className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-display text-xl font-bold text-foreground">MEDINFO</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {["Features", "Library", "Protocols"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-muted-foreground hover:text-primary transition-colors relative group font-medium"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground hidden sm:block">
                                {user.email.split("@")[0]}
                            </span>
                            <button
                                onClick={onLogout}
                                className="text-muted-foreground hover:text-destructive flex items-center gap-1 text-sm font-medium transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="hidden sm:inline">Sign Out</span>
                            </button>
                        </div>
                    ) : (
                        <button className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                            <User className="w-4 h-4" />
                            Sign In
                        </button>
                    )}
                    <button
                        onClick={onOpenChat}
                        className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20 active:scale-95"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
