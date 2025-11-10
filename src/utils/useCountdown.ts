import { useState, useEffect } from "react";

export function useCountdown(endTime?: string) {
    const [timeLeft, setTimeLeft] = useState<string>("");

    // Se não tiver endTime, define para amanhã às 13:00 (UTC)
    const endDate = (() => {
        if (endTime) {
            const parsed = new Date(endTime);
            if (!isNaN(parsed.getTime())) return parsed;
        }

        const now = new Date();
        const fallback = new Date();
        fallback.setDate(now.getDate() + 1);
        fallback.setUTCHours(13, 0, 0, 0);
        return fallback;
    })();

    useEffect(() => {
        const calculate = () => {
            const now = new Date().getTime();
            const diff = endDate.getTime() - now;

            if (diff <= 0) {
                setTimeLeft("Encerrado");
                return;
            }

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft(
                `${hours.toString().padStart(2, "0")}:${minutes
                    .toString()
                    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
            );
        };

        calculate();
        const interval = setInterval(calculate, 1000);

        return () => clearInterval(interval);
    }, [endTime]);

    return timeLeft;
}
