import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

// creates a new obj of styles. Takes the below card style and merges with the prop's and
// the props style overrides the card

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,//only works for android while shadow only works for iOS
        padding: 10,
        borderRadius: 13
    }
});

export default Card;