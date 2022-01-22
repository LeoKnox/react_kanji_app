import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

class Listview extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>List View</Text>
                <Button title="list Item, Click for Details" />
            </View>
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
    }
});

export default Listview;