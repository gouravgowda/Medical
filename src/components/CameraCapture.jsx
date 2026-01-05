import { useState, useRef, useEffect } from "react";
import { X, Camera, RefreshCw, Check, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CameraCapture = ({ isOpen, onClose, onCapture }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [facingMode, setFacingMode] = useState("environment");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            startCamera();
        } else {
            stopCamera();
        }
        return () => stopCamera();
    }, [isOpen, facingMode]);

    const startCamera = async () => {
        setIsLoading(true);
        setError(null);
        try {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            const newStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: facingMode, width: { ideal: 1280 }, height: { ideal: 720 } }
            });
            setStream(newStream);
            if (videoRef.current) {
                videoRef.current.srcObject = newStream;
            }
        } catch (err) {
            console.error("Camera access error:", err);
            setError("Unable to access camera. Please check permissions.");
        } finally {
            setIsLoading(false);
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
    };

    const capturePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext("2d");
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL("image/jpeg");
            setCapturedImage(dataUrl);
            stopCamera();
        }
    };

    const handleUsePhoto = () => {
        if (capturedImage) {
            onCapture(capturedImage);
            onClose();
        }
    };

    const handleRetake = () => {
        setCapturedImage(null);
        startCamera();
    };

    const toggleCamera = () => {
        setFacingMode(prev => prev === "user" ? "environment" : "user");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 relative z-10 bg-black/50 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-white font-display font-semibold">Visual Search</h2>
                        <p className="text-white/60 text-xs">Capture a photo to analyze</p>
                    </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Viewport */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                {isLoading && !capturedImage && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-900 z-10">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                        <p className="text-white/70 text-sm">Initializing camera...</p>
                    </div>
                )}

                {error && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center bg-zinc-900 z-10">
                        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                            <AlertCircle className="w-8 h-8 text-destructive" />
                        </div>
                        <p className="text-destructive font-medium">{error}</p>
                        <button onClick={startCamera} className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold">
                            Try Again
                        </button>
                    </div>
                )}

                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className={`w-full h-full object-cover ${capturedImage || error ? "hidden" : "block"}`}
                />

                {capturedImage && (
                    <img src={capturedImage} alt="Captured" className="w-full h-full object-contain" />
                )}

                {/* Overlay guides */}
                {!capturedImage && !error && !isLoading && (
                    <div className="absolute inset-8 border-2 border-primary/30 rounded-3xl pointer-events-none">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-2xl" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-2xl" />
                    </div>
                )}
            </div>

            {/* Controls */}
            <div className="p-8 pb-12 border-t border-white/10 bg-black/80 backdrop-blur-xl relative z-10">
                <div className="max-w-md mx-auto flex items-center justify-between gap-6">
                    {capturedImage ? (
                        <>
                            <button
                                onClick={handleRetake}
                                className="flex-1 py-4 px-6 rounded-2xl border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                            >
                                <RefreshCw className="w-5 h-5" />
                                Retake
                            </button>
                            <button
                                onClick={handleUsePhoto}
                                className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 shadow-lg shadow-primary/20 transition-all active:scale-95"
                            >
                                <Check className="w-5 h-5" />
                                Use Photo
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={toggleCamera}
                                disabled={isLoading || !!error}
                                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 transition-all"
                            >
                                <RefreshCw className="w-6 h-6" />
                            </button>

                            <button
                                onClick={capturePhoto}
                                disabled={isLoading || !!error}
                                className="w-24 h-24 rounded-full bg-white p-1 hover:scale-105 active:scale-95 disabled:opacity-30 transition-all group"
                            >
                                <div className="w-full h-full rounded-full border-4 border-black bg-white flex items-center justify-center" />
                            </button>

                            <div className="w-14 h-14" /> {/* Spacer */}
                        </>
                    )}
                </div>
            </div>

            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
};

export default CameraCapture;
