import React, { useLayoutEffect, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../component/MessageComponent";
import { styles } from "../utils/styles";

const Message = ({ navigation, route }) => {
    const [chatMessage, setChatMessage] = useState([
        {
            id: "1",
            text: "Hello guys, welcome!",
            time: "07:50",
            user: "Tomer",
        },
        {
            id: "2",
            text: "Hi Tomer, thank you! 😇",
            time: "08:50",
            user: "David",
        },
    ]);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("");

    // Accède au nom et id de la chat room
    const { name, id } = route.params;

    // Récupere le username sauvegarder avec AsyncStorage
    const getUsername = async () => {};

    return (
        <h1>Message</h1>
    );
};

export default Message;
