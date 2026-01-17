import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Colors } from '../../theme/styles';
import { OTP_DISPLAY_THRESHOLD } from '../../constants';

const staticStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 30,
    },
    inputBase: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.inputBackground,
        textAlign: 'center',
        color: Colors.text,
        fontWeight: 'bold',
    },
    inputActive: {
        borderColor: Colors.primary,
        backgroundColor: Colors.background,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    disabled: {
        opacity: 0.6,
        backgroundColor: Colors.disabled,
    },
});

export const styles = {
    ...staticStyles,
    input: (length: number): TextStyle => {
        const size = length > OTP_DISPLAY_THRESHOLD ? 45 : 60;
        const fontSize = length > OTP_DISPLAY_THRESHOLD ? 20 : 24;

        return {
            ...staticStyles.inputBase,
            width: size,
            height: size,
            fontSize: fontSize,
        };
    }
};
