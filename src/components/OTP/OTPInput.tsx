import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { styles } from './OTPInput.styles';

interface OTPInputProps {
  length?: number;
  onCodeChanged: (code: string) => void;
  disabled?: boolean;
}

const OTPInput: React.FC<OTPInputProps> = ({
  length = 4,
  onCodeChanged,
  disabled = false,
}) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<TextInput[]>([]);

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    onCodeChanged(newCode.join(''));

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


  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            if (ref) {
              inputs.current[index] = ref;
            }
          }}
          style={[
            styles.input,
            (digit || index === code.findIndex(c => c === '')) ? styles.inputActive : null,
             disabled && styles.disabled
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          editable={!disabled}
          selectTextOnFocus
          testID={`otp-input-${index}`}
        />
      ))}
    </View>
  );
};


export default OTPInput;
