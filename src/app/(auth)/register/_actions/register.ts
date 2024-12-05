'use server';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';
import { prisma as db } from '@/prisma/prisma';

export default async function register(FormData: FormData) {
  const entries = Array.from(FormData.entries());

  const { name, email, password } = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  if (!name || !email || !password) {
    throw new Error('Por favor, preencha todos os campos!');
  }

  const userExists = await db.user.findUnique({
    where: { email },
  });

  if (userExists) {
    throw new Error('email já cadastrado');
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
    },
  });

  console.log(entries);
  console.log(name, email, password);

  redirect('/');
}
