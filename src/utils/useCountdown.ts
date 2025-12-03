import { useState, useEffect } from "react";

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState("");

  // Calcula o próximo horário HH:25
  const getNextEndTime = () => {
    const now = new Date();
    const end = new Date();

    // Sempre pula para a próxima hora
    end.setHours(now.getHours() + 1);
    end.setMinutes(25);
    end.setSeconds(0);
    end.setMilliseconds(0);

    return end;
  };

  useEffect(() => {
    let endDate = getNextEndTime();

    const calculate = () => {
      const now = new Date().getTime();
      const diff = endDate.getTime() - now;

      if (diff <= 0) {
        // Reinicia automaticamente para a próxima hora
        endDate = getNextEndTime();
        return;
      }

      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);

      setTimeLeft(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`
      );
    };

    calculate();
    const interval = setInterval(calculate, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}
