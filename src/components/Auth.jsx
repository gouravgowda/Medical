import { useState } from "react";
import { Stethoscope, Mail, Lock, User, ArrowRight, Github } from "lucide-react";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="mb-8 flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                    <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <span className="font-display text-2xl font-bold tracking-tight">MEDINFO</span>
            </div>

            <div className="w-full max-w-md glass-card rounded-3xl p-8 border-2 border-white">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold font-display mb-2">
                        {isLogin ? "Welcome Back" : "Create Account"}
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        {isLogin ? "Enter your credentials to access clinical wisdom." : "Join 15,000+ medical professionals today."}
                    </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {!isLogin && (
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full pl-12 pr-4 py-3 bg-secondary/30 border border-border/50 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                            />
                        </div>
                    )}

                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="email"
                            placeholder="Medical Email"
                            className="w-full pl-12 pr-4 py-3 bg-secondary/30 border border-border/50 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        />
                    </div>

                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-12 pr-4 py-3 bg-secondary/30 border border-border/50 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        />
                    </div>

                    <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all">
                        {isLogin ? "Sign In" : "Get Started"}
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase bg-white px-4 text-muted-foreground font-bold tracking-widest">
                        Or continue with
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <button className="flex items-center justify-center gap-2 py-3 border border-border rounded-2xl hover:bg-slate-50 transition-colors font-medium text-sm">
                        <Github className="w-5 h-5" />
                        Medical ID / SSO
                    </button>
                </div>

                <p className="mt-8 text-center text-sm text-muted-foreground">
                    {isLogin ? "New to MedInfo?" : "Already have an account?"}{" "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-primary font-bold hover:underline"
                    >
                        {isLogin ? "Join now" : "Sign in"}
                    </button>
                </p>
            </div>

            <p className="mt-8 text-xs text-muted-foreground opacity-60 text-center max-w-xs">
                By continuing, you agree to unseren terms of service and clinical privacy policy.
            </p>
        </div>
    );
};

export default Auth;
