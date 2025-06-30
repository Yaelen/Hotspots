import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FanMenu = () => {
    const radius = 100;
    const itemCount = 5;
    const animation = useRef(new Animated.Value(0)).current;
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        Animated.spring(animation, {
            toValue: open ? 0 : 1,
            useNativeDriver: true,
        }).start();
        setOpen(!open);
    };

    const renderButtons = () => {
        return [...Array(itemCount)].map((_, index) => {
            const angle = (Math.PI * index) / (itemCount - 1); // 0 to π
            const x = radius * Math.cos(angle);
            const y = -radius * Math.sin(angle);

            const translateX = animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, x],
            });

            const translateY = animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, y],
            });

            return (
                <Animated.View
                    key={index}
                    style={[
                        styles.menuItem,
                        {
                            transform: [{ translateX }, { translateY }],
                        },
                    ]}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log(`Pressed button ${index + 1}`)}
                    >
                        <Ionicons name="planet" size={24} color="white" />
                    </TouchableOpacity>
                </Animated.View>
            );
        });
    };

    return (
        <View style={styles.container}>
            {renderButtons()}

            <TouchableOpacity style={styles.mainButton} onPress={toggleMenu}>
                <Ionicons name={open ? 'close' : 'menu'} size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        alignItems: 'center',
    },
    mainButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    menuItem: {
        position: 'absolute',
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#03dac6',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FanMenu;
