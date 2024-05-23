import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../utils/style";

const ChatComponent = ({ item }) => {
    const navigation = useNavigation();
    const [messages, setMessages] = useState({});

    //👇🏻 Récupère le dernier message du tableau à partir du prop item
    /**
     * useLayoutEffect s'exécute de manière synchrone immédiatement après que React ait effectué toutes
     * les mutations DOM. Cela peut être utile si vous devez effectuer des mesures DOM (comme obtenir la
     * position de défilement ou d'autres styles pour un élément), puis effectuer des mutations DOM ou
     * déclencher un nouveau rendu synchrone en mettant à jour l'état.
     * 
     * Si votre effet mute le DOM (via une référence de nœud DOM) et que la mutation DOM
     * modifiera l'apparence du nœud DOM entre le moment où il est rendu et celui où votre effet le
     * mute, alors vous ne souhaitez pas utiliser useEffect. Vous souhaiterez utiliser useLayoutEffect.
     * Sinon, l'utilisateur pourrait voir un scintillement lorsque vos mutations DOM prennent effet.
     * C'est à peu près la seule fois où vous souhaitez éviter useEffect et utiliser useLayoutEffect à
     * la place.
     */
    useLayoutEffect(() => {
        setMessages(item.messages[item.messages.length - 1]);
    }, []);

    ///👇🏻 Permet d'accéder à l'écran de messagerie
    const handleNavigation = () => {
        navigation.navigate("Messaging", {
            id: item.id,
            name: item.name,
        });
    };

    return (
        <Pressable style={styles.cchat} onPress={handleNavigation}>
            <Ionicons
                name='person-circle-outline'
                size={45}
                color='black'
                style={styles.cavatar}
            />

            <View style={styles.crightContainer}>
                <View>
                    <Text style={styles.cusername}>{item.name}</Text>

                    <Text style={styles.cmessage}>
                        {messages?.text ? messages.text : "Tap to start chatting"}
                    </Text>
                </View>
                <View>
                    <Text style={styles.ctime}>
                        {messages?.time ? messages.time : "now"}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default ChatComponent;
