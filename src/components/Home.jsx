import { useState } from "react";
import Hero from "./Hero";
import Features from "./Features";
import Protocols from "./Protocols";
import Trial from "./Trial";

const Home = ({ onOpenChat, onOpenCamera }) => {
    return (
        <>
            <Hero onOpenCamera={onOpenCamera} />
            <Features />
            <Protocols />
            <Trial onOpenChat={onOpenChat} />
        </>
    );
};

export default Home;
