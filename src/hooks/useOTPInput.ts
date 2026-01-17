import { useState, useRef, useEffect } from 'react';
import { TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

interface UseOTPInputProps {
    length: number;
    externalCode?: string;
    onCodeChanged: (code: string) => void;
}

export const useOTPInput = ({ length, externalCode, onCodeChanged }: UseOTPInputProps) => {
    const [code, setCode] = useState<string[]>(Array(length).fill(''));
    const inputs = useRef<TextInput[]>([]);


    useEffect(() => {
        if (externalCode !== undefined) {
            const currentCodeStr = code.join('');
            if (externalCode !== currentCodeStr) {
                const newCode = externalCode.split('').slice(0, length);
                while (newCode.length < length) {
                    newCode.push('');
                }
                setCode(newCode);
            }
        }
    }, [externalCode, length]);

    const handleChangeText = (text: string, index: number) => {
        if (!/^\d*$/.test(text)) {
            return;
        }

        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (
        e: NativeSyntheticEvent<TextInputKeyPressEventData>,
        index: number
    ) => {
        if (e.nativeEvent.key === 'Backspace') {
            if (!code[index] && index > 0) {
                inputs.current[index - 1].focus();
            }
        }
    };

    useEffect(() => {
        onCodeChanged(code.join(''));
    }, [code, onCodeChanged]);

    return {
        code,
        inputs,
        handleChangeText,
        handleKeyPress,
    };
};
