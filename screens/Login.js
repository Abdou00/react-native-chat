import React, { useState }  from "react";
import { 
    Text,
    View,
    TextInput,
    Pressable,
    Alert,
    SafeAreaView
} from "react-native";

import { styles } from "../utils/style";
/**
 * AsyncStorage est un système de stockage clé-valeur non chiffré, asynchrone, persistant et global pour l'application. Il doit être utilisé à la place de LocalStorage.
 * Il est recommandé d'utiliser une abstraction au-dessus d'AsyncStorage au lieu d'AsyncStorage directement pour autre chose qu'une utilisation légère, car elle fonctionne globalement.
 * Sur iOS, AsyncStorage s'appuie sur un code natif qui stocke les petites valeurs dans un dictionnaire sérialisé et les valeurs plus grandes dans des fichiers séparés. Sur Android, AsyncStorage utilisera RocksDB ou SQLite en fonction de ce qui est disponible.
 * Le code JavaScript d'AsyncStorage est une façade qui fournit une API JavaScript claire, de vrais objets Error et des fonctions non multifonctions. Chaque méthode de l'API renvoie un objet Promise.
 */
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
    /**
     *  useState est un React Hook qui vous permet d'ajouter une variable d'état à votre composant
     * React. Ce hook prend en paramètre : une valeur initiale ou une fonction renvoyant une valeur
     * initiale. Celui-ci retourne en échange : un tableau avec la valeur courante du “state” ainsi
     * qu'une fonction pour la mettre à jour
     */
    const [username, setUsername] = useState("");

    const storeUsername = async () => {
        try {
            await AsyncStorage.setItem("username", username);
            navigation.navigate('Chat');
        } catch (error) {
            Alert.alert('Error! While saving username')
        }
    }

    // Vérifie si username est rempli
    const handleSignIn = () => {
        if (username.trim()) {
            console.log({ username });
            storeUsername();
        } else {
            Alert.alert("Username is required!");
        }
    }

    return (
        //  SafeAreaView a pour but de restituer le contenu dans les limites de la zone de sécurité d'un appareil.
        // Il restitue le contenu imbriqué et applique automatiquement un remplissage pour refléter la partie de la vue qui n'est pas couverte par la barre de navigation, d'onglets, d'outils.
        // Disponible unniquement pour IOS 11 ou +
        <SafeAreaView style={styles.loginscreen}>
            {/* Le composant le plus fondamental pour la création d'une interface utilisateur, View est un conteneur qui prend en charge la mise en page avec flexbox, le style, une certaine gestion tactile et des contrôles d'accessibilité. La vue est conçue pour être imbriquée dans d’autres vues et peut avoir de 0 à plusieurs enfants de tout type. */}
            <View style={styles.loginscreen}>
                {/* Text est un composant React pour afficher du texte. */}
                <Text style={styles.loginheading}>Sign In</Text>

                <View style={styles.logininputContainer}>
                    {/* Un composant fondamental pour saisir du texte dans l'application via un clavier. Les accessoires permettent de configurer plusieurs fonctionnalités, telles que la correction automatique, la majuscule automatique, le texte d'espace réservé et différents types de clavier, tels qu'un pavé numérique. */}
                    <TextInput
                        autoCorrect={false}
                        placeholder="Enter your username"
                        style={styles.logininput}
                        onChangeText={(value) => setUsername(value)}
                    />
                </View>

                {/* Pressable est un wrapper de composant principal qui peut détecter différentes étapes d'interactions avec la presse sur l'un de ses enfants définis. */}
                <Pressable onPress={handleSignIn} style={styles.loginbutton}>
                    <View>
                        <Text style={styles.loginbuttonText}>Sign In</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Login;
