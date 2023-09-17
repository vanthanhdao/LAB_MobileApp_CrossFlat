import React, { useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const Animations = () => {
    const animatedWidth = useRef(new Animated.Value(50)).current;
    const animatedHeight = useRef(new Animated.Value(50)).current;

    const animatedBox = () => {
        Animated.timing(animatedWidth, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false, // Add this for compatibility
        }).start();
        Animated.timing(animatedHeight, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false, // Add this for compatibility
        }).start();


    }

    return (
        <TouchableOpacity style={styles.container} onPress={animatedBox}>
            <Animated.View style={[styles.box, { width: animatedWidth, height: animatedHeight }]} />
        </TouchableOpacity>
    );
}

export default Animations;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    box: {
        backgroundColor: 'blue',
    },
});
