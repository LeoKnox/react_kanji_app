import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, Button } from "react-native";

class Listview extends Component {
    render() {
        const myText = "learn Kanji while I learning programming";
        return (
            <SafeAreaView style={styles.center}>
                <Text style={styles.baseText}>Kanji Training App</Text>
                <Text style={styles.newText}>{myText}</Text>
                <Text style={styles.title}>List View</Text>
                <Button title="list Item, Click for Details" />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
    baseText: {
        color: "navy",
        fontSize: 30,
        fontStyle: "italic",
    },
    newText: {
        color: "red",
    }
});

export default Listview;