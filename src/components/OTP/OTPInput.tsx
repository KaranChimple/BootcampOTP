import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import { styles } from './OTPInput.styles';
import { OTP_LENGTH } from '../../constants';
import { useOTPInput } from '../../hooks/useOTPInput';

interface OTPInputProps {
  length?: number;
  code?: string;
  onCodeChanged: (code: string) => void;
  disabled?: boolean;
}

const OTPInput: React.FC<OTPInputProps> = ({
  length = OTP_LENGTH,
  code: externalCode,
  onCodeChanged,
  disabled = false,
}) => {
  const {
    code,
    inputs,
    handleChangeText,
    handleKeyPress,
  } = useOTPInput({
    length,
    externalCode,
    onCodeChanged,
  });
  
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
            styles.input(length),
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
