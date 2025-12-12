import { connectDB } from '@/lib/mongodb';
import { connectSocket } from '@/lib/socketio';

export async function GET() {
  await connectDB();
  await connectSocket();
}
