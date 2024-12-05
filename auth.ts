import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma/prisma';

import { compareSync } from 'bcrypt-ts';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/api/login'
  },
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) return null;

        const testPassword = compareSync(password, user.password ?? '');

        if (testPassword) {
          return { id: user.id, name: user.name, email: user.email };
        }

        return null;
      },
    }),
  ],
});
