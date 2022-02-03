import React, { useState, useEffect } from  "react";
import { StyleSheet, View, Text, Button} from "react-native";
import client from "./../../api/client";

const DetailView = ({ navigation, route }) => {
    const [detail, setDetail]= useState("");
    const { objurl } = route.params;

    const getDetail = async (url) => {
        try {
            const response = await client.get(url);
            if (!response.ok) {
                setDetail(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect (() => {
        getDetail(objurl);
    }, [])

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Kanji: {detail.kanji}</Text>
            <Text style={styles.title}>Pronounciation: {detail.pronounciation}</Text>
            <Text style={styles.title}>Meaning: {detail.meaning}</Text>
            <Text style={styles.title}>Reading: {detail.reading}</Text>
            <Text style={styles.title}>Strokes: {detail.strokes}</Text>
            <Text style={styles.title}>Grade: {detail.grade}</Text>
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