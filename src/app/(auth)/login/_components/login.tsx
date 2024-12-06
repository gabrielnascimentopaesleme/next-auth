import Link from 'next/link';

import login from '../_actions/login';

export default function LoginForm() {
  return (
    <div className="h-screen flex items-center">
      <div className="rounded-md flex flex-col gap-8 mx-auto w-1/3 h-4/5 bg-slate-800 text-white py-8">
        <div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl font-bold mt-4">Login NextAuth</h1>
          </div>
        </div>
        <div>
          <form action={login} className="p-6 pt-4">
            <div className="flex flex-col gap-8 items-center ">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="text-xl text-slate-200" htmlFor="email">
                  Email
                </label>
                <input
                  className="text-base text-slate-950 p-1.5"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="text-xl text-slate-200" htmlFor="password">
                  Senha
                </label>
                <input
                  className="text-base p-1.5"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="flex justify-center p-6 pb-0 mt-4">
              <button
                type="submit"
                className="text-xl px-10 py-2 rounded-lg text-slate-200 border bg-green-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="p-6 pt-0 flex justify-center gap-1">
          <p>Não possui conta?</p>
          <Link className='underline decoration-slate-50' href="/register">Registre-se</Link>
        </div>
      </div>
    </div>
  );
}
