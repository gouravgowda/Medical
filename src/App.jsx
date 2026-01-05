import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Protocols from "./components/Protocols";
import Trial from "./components/Trial";
import Footer from "./components/Footer";
import DoctorChat from "./components/DoctorChat";
import CameraCapture from "./components/CameraCapture";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mock user login check
    const mockUser = { email: "dr.demo@medinfo.com" };
    setUser(mockUser);
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Navbar
        user={user}
        onLogout={handleLogout}
        onOpenChat={() => setIsChatOpen(true)}
      />

      <main>
        <Hero onOpenCamera={() => setIsCameraOpen(true)} />
        <Features />
        <Protocols />
        <Trial onOpenChat={() => setIsChatOpen(true)} />
      </main>

      <Footer />

      {isChatOpen && (
        <DoctorChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      )}

      {isCameraOpen && (
        <CameraCapture
          isOpen={isCameraOpen}
          onClose={() => setIsCameraOpen(false)}
          onCapture={(img) => console.log("Captured image:", img)}
        />
      )}
    </div>
  );
}

export default App;
