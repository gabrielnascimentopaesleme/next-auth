import Link from 'next/link';
import { signIn } from 'auth';

export default function LoginForm() {
  return (
    <>
      <div className="mx-auto max-w-96 bg-slate-800 text-white p-8">
        <div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6" />
            Faça Login
          </div>
        </div>
        <div>
          <form
            action={async () => {
              'use server';
              await signIn();
            }}
            className="text-left text-black"
          >
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
        <div>
          <Link className={'mt-2 mx-auto'} href="/api/register">
            Não possui conta? Registre-se
          </Link>
        </div>
      </div>
      <Link href="/">Voltar para Home</Link>
    </>
  );
}
