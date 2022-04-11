import { useSocketServer } from "socket-controllers";
import { Server } from "socket.io";

export default (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: ['http://localhost:3000/', 'https://tictactoe.pavanaditya.com'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'Access-Control-Allow-Origin'],
      credentials: true
    },
  });

  // io.on("connection", (socket) => {

  // });

  useSocketServer(io, { controllers: [__dirname + "/api/controllers/*.ts"] });

  return io;
};
