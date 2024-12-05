import { redirect } from 'next/navigation';
import { auth, signIn } from 'auth';
import { AuthError } from 'next-auth';
import login from '@/app/(auth)/login/_actions/login';


export default async function SignInPage(props: {
  searchParams: { callbackUrl: string | undefined };
}) {
  const callbackUrl = props.searchParams?.callbackUrl || '/';
  return (
    <div className="flex flex-col gap-2">
      <form action={login} className="text-left text-black">
        <div className="space-y-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="email@exemplo.com"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="password">Senha</label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="********"
            />
          </div>
        </div>
        <button type="submit" className="w-full mt-10 ">
          Login
        </button>
      </form>
    </div>
  );
}
