import React, { useState, useEffect } from "react";
import { StyleSheet, SafeView, Text, FlatList } from "react-native";
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
            <FlastList
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