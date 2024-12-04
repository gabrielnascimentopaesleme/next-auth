import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import credentials from '@/app/components/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize(credentials) {
        console.log(credentials);
        if (credentials.password === '123') {
          return { id: '2', name: 'Gabriel', email: 'teste@email.com' };
        }
        return null;
      },
    }),
  ],
});
