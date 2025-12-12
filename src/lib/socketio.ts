import { Server as SocketIOServer } from 'socket.io';

export async function connectSocket() {
  if (!global.io) {
    const io = new SocketIOServer({
      cors: { origin: '*' },
    });

    global.io = io;

    io.on('connection', () => {
      console.log('New client');
    });
  }
}
