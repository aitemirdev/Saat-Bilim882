import { useEffect, useState } from "react";

export default function IntroAnimation() {
    const [show, setShow] = useState(false);
    const [phase, setPhase] = useState("slow"); // slow → fast → blur → logo → fadeout

    useEffect(() => {
        // Показываем интро только при первом заходе
        if (!localStorage.getItem("introPlayed")) {
            setShow(true);
            localStorage.setItem("introPlayed", "true");

            // Тайминг анимации
            setTimeout(() => setPhase("fast"), 3000);
            setTimeout(() => setPhase("blur"), 6000);
            setTimeout(() => setPhase("logo"), 7000);
            setTimeout(() => setPhase("fadeout"), 8000);
            setTimeout(() => setShow(false), 9000);
        }
    }, []);

    if (!show) return null;

    return (
        <div className={`intro ${phase}`}>
            <video className="intro-video" src="/intro.mp4" autoPlay muted playsInline />

            {/* SVG ЧАСЫ */}
            <svg className="clock" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" />

                {/* Минутная стрелка */}
                <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="12"
                    stroke="white"
                    strokeWidth="1.5"
                    className="minute-hand"
                />

                {/* Часовая стрелка */}
                <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="28"
                    stroke="white"
                    strokeWidth="2"
                    className="hour-hand"
                />
            </svg>

            {/* ЛОГОТИП */}
            <img src="/logo.png" className="intro-logo" alt="Logo" />
        </div>
    );
}