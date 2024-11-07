"use client"

import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Home() {

  // Initialisation de la connexion au serveur WebSocket
  const socket = io('https://little-nodejs-server.onrender.com/', { autoConnect: false });

  const sendMessage = (message: string) => {
    if (!socket.connected) {
      socket.connect();
    }
    socket.emit('message', { "message": message });
  };

  useEffect(() => {
    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, [socket]);


  return (
    <>
      <h1>Choisissez un casier avec les pièces que vous recherchez et la led du casier s'allumera.</h1>
      <p>Attention au démarrage du back-end peut prendre du temps, 1min environ.</p>
      <section>
        <div className="stock-item" onClick={() => sendMessage('Leds')}>
          <span>Leds</span>
        </div>
        <div className="stock-item" onClick={() => sendMessage('Résistances')}>
          <span>Résistances</span>
        </div>
      </section>
    </>
  );
}
