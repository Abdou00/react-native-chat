import { io } from "socket.io-client";

// Créé une connexion en temps réel au server hébergé suur cette URL
const socket = io.connect('http://localhost:4000');

export default socket;