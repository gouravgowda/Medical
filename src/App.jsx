import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
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
        <Home
          onOpenChat={() => setIsChatOpen(true)}
          onOpenCamera={() => setIsCameraOpen(true)}
        />
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
