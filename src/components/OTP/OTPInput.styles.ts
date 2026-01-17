import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/styles';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginBottom: 30,
    },
    input: {
        width: 60,
        height: 60,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.inputBackground,
        textAlign: 'center',
        fontSize: 24,
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
