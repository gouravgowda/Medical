/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    glow: "hsl(var(--primary-glow))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                medical: {
                    blue: "hsl(var(--medical-blue))",
                    teal: "hsl(var(--medical-teal))",
                    navy: "hsl(var(--medical-navy))",
                    light: "hsl(var(--medical-light))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                display: ["Space Grotesk", "system-ui", "sans-serif"],
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                float3d: {
                    "0%, 100%": { transform: "translateY(0) rotateX(0) rotateY(0)" },
                    "25%": { transform: "translateY(-15px) rotateX(2deg) rotateY(2deg)" },
                    "50%": { transform: "translateY(-25px) rotateX(0) rotateY(0)" },
                    "75%": { transform: "translateY(-15px) rotateX(-2deg) rotateY(-2deg)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                bounceSubtle: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5px)" },
                },
                glowPulse: {
                    "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
                    "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.3)" },
                },
                shimmer: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                handWave: {
                    "0%, 100%": { transform: "translateY(0) rotate(0)", opacity: "0.6" },
                    "25%": { transform: "translateY(-8px) rotate(-5deg)", opacity: "0.8" },
                    "50%": { transform: "translateY(-4px) rotate(5deg)", opacity: "1" },
                    "75%": { transform: "translateY(-10px) rotate(-3deg)", opacity: "0.7" },
                },
                soundWave: {
                    "0%, 100%": { transform: "scaleY(0.5)", opacity: "0.6" },
                    "50%": { transform: "scaleY(1.5)", opacity: "1" },
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "float-slow": "float 10s ease-in-out infinite",
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
                "scale-in": "scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                "shimmer": "shimmer 2s linear infinite",
                "hand-wave": "handWave 2s ease-in-out infinite",
                "sound-wave": "soundWave 0.5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
}
