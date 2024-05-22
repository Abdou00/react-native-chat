import React  from "react";
import { 
    Text,
    View,
    Pressable,
    SafeAreaView,
    FlatList
} from "react-native";
import { Feather } from "@expo/vector-icons"; // npm i @expo/vector-icons
import ChatComponent from "../component/ChatComponent";
import { styles } from "../utils/style";

const Chat = () => {
    const rooms = [
        {
            id: "1",
            name: "Room #1",
            messages: [
                {
                    id: "1",
                    text: "Hello World",
                    time: "05:43",
                    user: "Jim"
                },
            ],
        },
        {
            id: "2",
            name: "Room #2",
            messages: [
                {
                    id: "1",
                    text: "Hello World",
                    time: "15:30",
                    user: "Jimmy"
                },
            ],
        },
        {
            id: "3",
            name: "Room #3",
            messages: [
                {
                    id: "1a",
                    text: "Hello World",
                    time: "22:03",
                    user: "Pappe"
                },
                {
                    id: "1b",
                    text: "Hello Pappe",
                    time: "22:03",
                    user: "David"
                },
            ],
        },
    ];
    return (
        <SafeAreaView style={styles.chatscreen}>
            <View style={styles.chattopContainer}>
                <View style={styles.chatheader}>
                    <Text style={styles.chatheading}>Chats</Text>

                    <Pressable onPress={() => console.log("Button Pressed")}>
                        <Feather name="edit" size={24} color='green' />
                    </Pressable>
                </View>
            </View>
            
            <View style={styles.chatlistContainer}>
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <ChatComponent item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View style={styles.chatemptyContainer}>
                        <Text style={styles.chatemptyText}>No rooms created!</Text>
                        <Text>Click the icon above to create a Chat room</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Chat;