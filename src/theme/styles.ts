import { StyleSheet } from 'react-native';

export const Colors = {
    primary: '#4A90E2',
    background: '#FFFFFF',
    text: '#333333',
    subtext: '#666666',
    error: '#FF3B30',
    success: '#4CD964',
    border: '#E0E0E0',
    inputBackground: '#F5F5F5',
    disabled: '#A0A0A0',
};

export const Typography = {
    header: {
        fontSize: 24,
        fontWeight: 'bold' as 'bold',
        color: Colors.text,
        marginBottom: 8,
    },
    subheader: {
        fontSize: 16,
        color: Colors.subtext,
        marginBottom: 24,
    },
    body: {
        fontSize: 14,
        color: Colors.text,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600' as '600',
        color: '#FFFFFF',
    },
};

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 20,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
