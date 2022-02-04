import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ kanji, meaning }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>{ kanji }</Text>
                <Text style={styles.details}>{ meaning }</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "white",
        overflow: "hidden",
        flex: 1,
        borderRadius: 15,
    },
    inner: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: 100,
    },
    title: {
        fontSize: 28,
        margin: 10,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    details: {
        fontSize: 15,
        margin: 10,
        fontWeight: "bold",
        color: "blue",
        textAlign: "center",
    },
});

export default Card;