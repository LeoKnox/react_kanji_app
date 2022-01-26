import React, { Component } from  "react";
import { StyleSheet, View, Text, Button} from "react-native";

const DetailView = ({ navigation, route }) => {
    const { objurl } = route.params;
    const { hey } = route.params;
    return (
        <View style={styles.center}>
            <Text style={styles.title}>{hey}</Text>
            <Text style={styles.title}>{objurl}</Text>
        </View>
    );
};

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
});

export default DetailView;