import { Stethoscope } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <Stethoscope className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-display text-lg font-bold">MEDINFO</span>
                    </div>

                    <nav className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact</a>
                    </nav>

                    <div className="text-center md:text-right">
                        <p className="text-sm text-muted-foreground">
                            © 2024 MedInfo. 为医疗教育目的。
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 opacity-70">
                            Clinical knowledge hub for medical professionals.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
