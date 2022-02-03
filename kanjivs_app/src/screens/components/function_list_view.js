import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, FlatList, TouchableOpacity, CheckBox } from "react-native";
import client from "./../../api/client";
import Card from "./shared/card";

const ListView = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isSelected, setSelection] = useState(false);
    const grade = 2;

    const getList = async () => {
        const response = await client.get("/grade/?grade="+grade);
        setData(response.data);
    };

    useEffect(() => {
        getList();
    }, []);

    const setSelections = (value) => {
        if (isSelected === false) {
            console.log("one");
        }
        console.log(value);
    };
    
    const mytext = "learn Kanji";
    return (
        <SafeAreaView style={styles.center}>
            <Text style={styles.baseText}>Kanji Learning App</Text>
            <Text style={styles.newText}>{mytext}</Text>
            <Text>{data.length} Kanjis</Text>
            <label>Grade 1</label>
            <CheckBox
                title="One"
                value={1}
                onValueChange={(newValue) => setSelections(newValue)}
                style={styles.checkbox}
            />
            <label>Grade 2</label>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                checkedColor="blue"
                style={styles.checkbox}
            />
            <Text>ddd: {isSelected} </Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.idkanji_dict.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Detail", {objurl: item.absolute_url, hey: "It's Kanji"});
                            }}
                        >
                            <Card
                                kanji={item.kanji}
                                meaning={item.meaning}
                            />
                        </TouchableOpacity>
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
    },
    checkbox: {
    },
});

export default ListView;