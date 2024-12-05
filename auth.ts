import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma/prisma';

import { compareSync } from 'bcrypt-ts';
import { Provider } from 'next-auth/providers';

const providers: Provider[] = [
  Credentials({
    credentials: {
      email: { label: 'Email', type: 'text' },
      password: { label: 'Password', type: 'password' },
    },
    authorize: async (credentials) => {
      const email = credentials.email as string;
      const password = credentials.password as string;
      if (!email || !password) {
        return null;
      }

      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new Error('Credenciais Inválidas');
      }

      const testPassword = compareSync(password, user.password ?? '');

      if (!testPassword) {
        throw new Error('Credenciais inválidas.');
      }

      return user;
    },
  }),
  GitHub,
  Google,
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === 'function') {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== 'credentials');

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers,
  session: {
    strategy: 'jwt', // Usa JWT em vez de sessões baseadas em banco de dados
  },
  callbacks: {
    jwt({ token, user }) {
      // Adiciona informações do usuário ao token durante o login
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({session, token}) {
      session.user.id = token.id as string
      return session
    }
  },
});
