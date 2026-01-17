import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import OTPInput from '../components/OTP/OTPInput';
import { useOTPTimer } from '../hooks/useOTPTimer';
import { Typography, GlobalStyles } from '../theme/styles';
import { styles } from './VerificationScreen.styles';
import { OTP_LENGTH } from '../constants';

const VerificationScreen = () => {
  const [otpCode, setOtpCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const { formattedTime, isActive, startTimer } = useOTPTimer();

  const handleVerify = async () => {
    if (otpCode.length !== OTP_LENGTH) {
      Alert.alert('Invalid OTP', `Please enter a ${OTP_LENGTH}-digit code.`);
      return;
    }

    setIsVerifying(true);
    console.log('Verifying OTP:', otpCode);

    // To Mock network delay of 2 seconds
    setTimeout(() => {
      setIsVerifying(false);
      console.log('OTP Verified Successfully!', otpCode);
      Alert.alert(
        'Success', 
        `OTP ${otpCode} verified!`,
        [
          { text: 'OK', onPress: () => setOtpCode('') }
        ]
      );
    }, 2000);
  };

  const handleResend = () => {
    if (isActive) return;
    
    startTimer();
    console.log('Resending OTP...');
    Alert.alert('OTP Resent', 'A new code has been sent to your device.');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={GlobalStyles.container}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoid}
        >
          <View style={styles.content}>
            <Text style={Typography.header}>OTP Verification</Text>
            <Text style={Typography.subheader}>
              Enter the verification code we just sent you on
            </Text>

            <Text style={[Typography.subheader, Typography.email]}>example@gmail.com</Text>

            <OTPInput 
              length={OTP_LENGTH} 
              code={otpCode}
              onCodeChanged={setOtpCode}
              disabled={isVerifying} 
            />

            <TouchableOpacity
              style={[
                styles.verifyButton,
                (otpCode.length !== OTP_LENGTH || isVerifying) && styles.verifyButtonDisabled
              ]}
              onPress={handleVerify}
              disabled={otpCode.length !== OTP_LENGTH || isVerifying}
            >
              {isVerifying ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={Typography.buttonText}>Verify</Text>
              )}
            </TouchableOpacity>

            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn't receive code? </Text>
              {isActive ? (
                <Text style={styles.timerText}>Resend in {formattedTime}</Text>
              ) : (
                <TouchableOpacity onPress={handleResend}>
                  <Text style={styles.resendLink}>Resend Code</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


export default VerificationScreen;
