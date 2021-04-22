import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'

export default props => {
    const button = level => {
        let style = {}
        let difficultLevel = 0
        let label = ''
        switch (level) {
            case 'easy':
                style = styles.bgEasy
                difficultLevel = 0.1
                label = 'Fácil'
                break;
            case 'normal':
                style = styles.bgNormal
                difficultLevel = 0.2
                label = 'Intermediário'
                break;
            case 'hard':
                style = styles.bgHard
                difficultLevel = 0.3
                label = 'Difícil'
                break;
            default: return
        }
        return (
            <TouchableOpacity style={[styles.button, style]} onPress={() => props.onLevelSelected(difficultLevel)}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} 
                animationType='slide' transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    {button('easy')}
                    {button('normal')}
                    {button('hard')}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})