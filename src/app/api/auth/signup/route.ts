import { CreateUserDTO } from '@/dtos/User';
import { connectDB } from '@/lib/mongodb';
import { SignupSchema } from '@/lib/validation/auth';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectDB();

  console.log('am here');

  const body = (await req.json()) as CreateUserDTO;

  const parsed = SignupSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { email, password, username } = parsed.data;

  const exist = await User.findOne({ email });

  if (exist) {
    return NextResponse.json(
      {
        error: 'User with that email already exists',
      },
      {
        status: 409,
      },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    username,
    password: hashedPassword,
  });

  return NextResponse.json({
    _id: user._id,
    email: user.email,
    username: user.username,
  });
}
