import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, FlatList } from "react-native";
import client from "./../../api/client";

const ListView = () => {
    const [data, setData] = useState([]);

    const getList = async () => {
        const response = await client.get("/");
        setData(response.data);
    };

    useEffect(() => {
        getList();
    }, []);
    
    const mytext = "learn Kanji";
    return (
        <SafeAreaView style={styles.center}>
            <Text style={styles.baseText}>Kanji Learning App</Text>
            <Text style={styles.newText}>{mytext}</Text>
            <Text>{data.length} Kanjis</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.idkanji_dict.toString()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.itemText}>
                            {item.kanji}: {item.meaning}
                        </Text>
                    );
                }}
            />
        </SafeAreaView>
    )
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
    baseText: {
        color: "navy",
        fontSize: 30,
        fontStyle: "italic",
    },
    newText: {
        color: "red",
    },
    itemText: {
        color: "green",
        fontSize: 20,
    }
});

export default ListView;