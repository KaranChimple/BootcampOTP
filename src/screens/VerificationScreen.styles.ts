import { StyleSheet } from 'react-native';
import { Colors } from '../theme/styles';

export const styles = StyleSheet.create({
    keyboardAvoid: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        paddingHorizontal: 20,
    },
    verifyButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        marginTop: 20,
    },
    verifyButtonDisabled: {
        backgroundColor: Colors.disabled,
        shadowOpacity: 0,
        elevation: 0,
    },
    resendContainer: {
        flexDirection: 'row',
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resendText: {
        color: Colors.subtext,
        fontSize: 14,
    },
    resendLink: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 14,
    },
    timerText: {
        color: Colors.text,
        fontWeight: 'bold',
        fontSize: 14,
    },
});
