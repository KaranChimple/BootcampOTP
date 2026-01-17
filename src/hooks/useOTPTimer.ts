import { useState, useEffect, useCallback, useRef } from 'react';

const RESEND_TIMEOUT = 60;

export const useOTPTimer = () => {
    const [timeLeft, setTimeLeft] = useState(0);
    const timerRef = useRef<number | null>(null);

    const startTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        setTimeLeft(RESEND_TIMEOUT);
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    if (timerRef.current) clearInterval(timerRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }, []);

    const resetTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        setTimeLeft(0);
    }, []);

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const isActive = timeLeft > 0;

    const formattedTime = `00:${timeLeft.toString().padStart(2, '0')}`;

    return {
        timeLeft,
        formattedTime,
        isActive,
        startTimer,
        resetTimer,
    };
};
