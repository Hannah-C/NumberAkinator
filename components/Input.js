import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return (
        <TextInput
            {...props} 
            style={{...styles.inputContainer, ...props.style}} 
            //placeholder='Type a Number'
        />
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
        //fontSize: 50
    }
});

export default Input;